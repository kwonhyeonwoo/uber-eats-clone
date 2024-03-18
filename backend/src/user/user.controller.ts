import { Body, Controller, Get, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateAccount } from "./dtos/create-account.dto";
import { LoginType } from "./dtos/login.dto";
import { AuthGuard } from "@nestjs/passport";
import { UserUpdate } from "./dtos/user-update";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
        // private readonly authService: AuthService
    ) { }

    @Post('/signup')
    signup(@Body() body: CreateAccount) {
        console.log('controller ', body)
        return this.userService.signup(body);
    }

    @Post('/signin')
    signin(@Body() body: LoginType, @Res() res) {
        console.log(body)
        return this.userService.signin(body, res)
    }

    @Get('/profile')
    @UseGuards(AuthGuard('jwt'))
    async profile(@Req() req) {
        console.log('dldldl', req.user)
        return this.userService.profile(req.user.email)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/update')
    async update(@Body() body: UserUpdate, @Req() req) {
        console.log('req', req.user)
        console.log('body', body.email);
        return this.userService.update(body, req.user.userId)
    }
}