import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateAccount } from "./dtos/create-account.dto";
import { LoginType } from "./dtos/login.dto";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post('/signup')
    signup(@Body() body: CreateAccount) {
        return this.userService.signup(body);
    }

    @Post('/signin')
    signin(@Body() body: LoginType) {
        return this.userService.signin(body)
    }
}