import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entites/user.entity";
import { Repository } from "typeorm";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAccount } from "./dtos/create-account.dto";
import { LoginType } from "./dtos/login.dto";

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>
    ) { }

    async signup(body: CreateAccount) {
        try {
            const { email, role, password } = body;
            const exists = await this.userRepo.findOne({
                where: { email }
            })
            // 비밀번호 암호화
            const hashedPassword = await bcrypt.hash(password, 5);

            // 이미 가입 된 이메일이면 error
            if (exists) {
                // BadRequestException은 400 error 내뱉음
                throw new BadRequestException('이미 존재하는 이메일 입니다.')
            }
            const create = await this.userRepo.save({
                email,
                role,
                password: hashedPassword
            });
            return create;
        } catch (error) {
            console.log(error)
        }
    }

    async signin(body: LoginType) {
        const { email, password } = body;
        const exists = await this.userRepo.findOne({
            where: { email }
        })
        // 이메일이 존재하지 않을 경우
        if (!exists) {
            throw new BadRequestException('이메일이 존재하지 않습니다.')
        }

        //비밀번호 체크
        const matchPassword = await bcrypt.compare(password, exists.password);
        if (!matchPassword) {
            throw new BadRequestException('비밀번호가 올바르지 않습니다.')
        }

        const token = jwt.sign({ id: exists.id }, process.env.SECRET_KEY)
    }
}