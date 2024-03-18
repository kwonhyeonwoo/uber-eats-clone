import { PickType } from '@nestjs/mapped-types';
import { User } from "../entites/user.entity";
import { IsString } from 'class-validator';

export class LoginType extends PickType(User, ['email', 'password']) {

}