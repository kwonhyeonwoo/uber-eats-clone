import { IsEmail, IsString } from "class-validator";

export class UserUpdate {
    @IsEmail()
    email: string
}