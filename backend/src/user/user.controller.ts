import { Body, Controller, Get, Patch, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateAccount } from "./dtos/create-account.dto";
import { LoginType } from "./dtos/login.dto";
import { AuthGuard } from "@nestjs/passport";
import { UserUpdate } from "./dtos/user-update";
import { AuthGuards } from "src/auth/auth.guard";
import { JwtStrategy } from "src/jwt/jwt.strategy";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
        // private readonly authService: AuthService
    ) { }

    @Post('/signup')
    signup(@Body() body: CreateAccount, @Res() res) {
        console.log(body)
        return this.userService.signup(body, res);
    }

    @Post('/signin')
    signin(@Body() body: LoginType, @Res() res) {
        return this.userService.signin(body, res)
    }

    @Get('/profile')
    @UseGuards(AuthGuard('jwt'))
    async profile(@Req() req, @Res() res) {
        return this.userService.profile(req.user, res)
    }

    @UseGuards(JwtStrategy)
    @Patch('/update')
    async update(@Body() body: UserUpdate, @Req() req, @Res() res) {
        return this.userService.update(body, req.user, res)
    }
}