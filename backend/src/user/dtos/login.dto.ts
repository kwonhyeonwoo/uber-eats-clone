import { PickType } from '@nestjs/mapped-types';
import { User } from "../entites/user.entity";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginType {
    @IsEmail()
    @IsNotEmpty() // 빈값 또는 null이 아닌지 확인
    email: string

    @IsString()
    @IsNotEmpty()
    nickName: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    role: 'client'
}