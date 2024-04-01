import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

type Role = 'client' | 'owner' | ''
export class SignupDto {
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
    role: Role
}