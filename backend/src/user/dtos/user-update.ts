import { IsEmail, IsOptional, IsString } from "class-validator";
import { PickType } from '@nestjs/mapped-types';
import { User } from "../entites/user.entity";


export class UserUpdate {
    @IsEmail()
    @IsOptional()
    email?: string

    @IsString()
    @IsOptional()
    nickName?: string

    @IsString()
    @IsOptional()
    name?: string
}