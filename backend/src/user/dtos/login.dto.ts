import { PickType } from '@nestjs/mapped-types';
import { User } from "../entites/user.entity";

export class LoginType extends PickType(User, ['email', 'password']) { }