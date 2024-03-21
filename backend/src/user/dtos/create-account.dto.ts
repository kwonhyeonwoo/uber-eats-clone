import { PickType } from '@nestjs/mapped-types';
import { User } from "../entites/user.entity";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// PickType은 부모 DTO에 내가 가져 올려고하는 필드를 가져올 수 있고, 추가로 더 적어줘도 된다.
export class CreateAccount {
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