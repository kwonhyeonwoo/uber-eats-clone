import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) { }

    getAccessToken({ user }) {
        return this.jwtService.sign(
            {
                email: user.email,
                sub: user.id
            },
            {
                secret: process.env.SECRET_KEY,
                expiresIn: '5m'
            }
        )
    }

    getRefreshToken({ user, res }) {
        return this.jwtService.sign(
            {
                email: user.email,
                sub: user.id
            },
            {
                secret: process.env.SECRET_KEY,
                expiresIn: '24w'
            }
        )
    }
}
