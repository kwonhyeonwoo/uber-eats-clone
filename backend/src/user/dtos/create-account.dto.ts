import { PickType } from '@nestjs/mapped-types';
import { User } from "../entites/user.entity";

// PickType은 부모 DTO에 내가 가져 올려고하는 필드를 가져올 수 있고, 추가로 더 적어줘도 된다.
export class CreateAccount extends PickType(User, [
    'email',
    'password',
    'nickName',
    'name'
]) { }