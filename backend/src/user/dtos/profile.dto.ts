import { PickType } from "@nestjs/graphql";
import { CoreEntity } from "src/common/entites/core.entity";
import { User } from "../entites/user.entity";

export class Profile extends PickType(User, [
    'email',
    'createAt',
    'updateAt',

]) { }