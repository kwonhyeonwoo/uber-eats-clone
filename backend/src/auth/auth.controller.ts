import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dtos/create-auth.dto';
import { Request, Response } from 'express';
import { LoginAuthDto } from './dtos/login-auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('/signup')
    signup(@Body() body: CreateAuthDto, @Res() res: Response) {
        console.log(body)
        return this.authService.signup(body, res);
    }

    @Post('/signin')
    signin(@Body() body: LoginAuthDto) {
        return this.authService.signin(body)
    }

    @Get('/profile')
    @UseGuards(AuthGuard('jwt'))
    profile(@Req() req: Request) {
        return this.authService.profile(req);
    }
}
