import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entites/user.entity";
import { Repository } from "typeorm";
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

    async signup(body: CreateAccount) {
        try {
            const { email, role, password } = body;
            const exists = await this.userRepo.findOne({
                where: { email }
            })
            // 비밀번호 암호화
            const hashedPassword = await bcrypt.hash(password, 5);
            console.log('body', body)
            // 이미 가입 된 이메일이면  error
            if (exists) {
                // BadRequestException은 400 error 내뱉음
                throw new BadRequestException('이미 존재하는 이메일 입니다.')
            }
            const user = await this.userRepo.save({
                email,
                role,
                password: hashedPassword
            });
            return await this.verifications.save(
                this.verifications.create({
                    user
                })
            )
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
        if (!matchPassword) {
            throw new BadRequestException('비밀번호가 올바르지 않습니다.')
        }
        // user 가 있으면 톸큰 발급
        const token = await this.authService.login(user)
        return res.status(200).json(token)
    }


    async profile(email: string) {
        const profile = await this.userRepo.findOne({ where: { email } })
        console.log('user service', profile)
        return profile
    }


    async update(body: UserUpdate, id: string) {
        const { email } = body;
        const exists = await this.userRepo.findOne({
            where: { email }
        });
        if (exists) {
            throw new BadRequestException('이미 존재하는 이메일 입니다.')
        }
        const update = await this.userRepo.update(id, body)
        return update;
    }
}