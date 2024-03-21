import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entites/user.entity";
import { Not, Repository } from "typeorm";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAccount } from "./dtos/create-account.dto";
import { LoginType } from "./dtos/login.dto";
import * as bcrypt from 'bcrypt';
import { Response } from "express";
import { AuthService } from "src/auth/auth.service";
import { UserUpdate } from "./dtos/user-update";
import { Verification } from "./entites/verification";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        @InjectRepository(Verification) private verifications: Repository<Verification>,
        private readonly authService: AuthService
    ) { }

    async signup(body: CreateAccount, res: Response) {
        try {
            const { email, name, nickName, password, role } = body;
            const exists = await this.userRepo.findOne({
                where: { email }
            })
            // 비밀번호 암호화
            const hashedPassword = await bcrypt.hash(password, 5);

            // 이미 가입 된 이메일이면  error
            if (exists) {
                // BadRequestException은 400 error 내뱉음
                return res.status(401).json({
                    message: "This email already exists."
                })
            }

            // 클라이언트인지 검사
            if (role !== 'client') {
                return res.status(401).json({
                    message: 'Please select us as a client.'
                })
            }

            await this.userRepo.save({
                email,
                name,
                nickName,
                role,
                password: hashedPassword
            });
            return res.status(200).json({ message: 'Sign up is complete.' })
        } catch (error) {
            console.log(error)
        }
    }

    async signin(body: LoginType, res: Response) {
        const { email, password } = body;
        console.log('body', body)
        const user = await this.userRepo.findOne({
            where: { email }
        })
        console.log('user', user)
        // 이메일이 존재하지 않을 경우
        if (!user) {
            throw new BadRequestException('이메일이 존재하지 않습니다.')
        }

        //비밀번호 체크
        const matchPassword = await bcrypt.compare(password, user.password);
        console.log('matchPassword', matchPassword)
        if (!matchPassword) {
            throw new BadRequestException('비밀번호가 올바르지 않습니다.')
        }
        // user 가 있으면 톸큰 발급
        const token = await this.authService.login(user)
        return res.status(200).json(token)
    }

    async profile(id: number, res: Response) {
        try {
            const profile = await this.userRepo.findOne({ where: { id } })
            if (!profile) {
                return res.status(400).json({ message: '프로필이없슴' })
            } else {
                return res.status(200).json(profile)
            }
        } catch (err) {
            console.log('internet Error', err)
        }
    }

    async update(body: UserUpdate, id: number, res: Response) {
        const { email, nickName, name } = body;
        const user = await this.userRepo.findOneBy({ id });
        if (!user) {
            throw new Error('User not found');
        };
        if (email && email !== user.email) {
            const emailExists = await this.userRepo.findOneBy({ email: email });
            if (emailExists) {
                return res.status(400).json({
                    message: 'Email already in use'
                });
            }
        }

        if (nickName && nickName !== user.nickName) {
            const nickNameExists = await this.userRepo.findOneBy({ nickName: nickName });
            if (nickNameExists) {
                return res.status(400).json({
                    message: 'NickName already in use'
                });
            }
        }

        Object.assign(user, body);
        await this.userRepo.save(user);
        return user;
    }

}