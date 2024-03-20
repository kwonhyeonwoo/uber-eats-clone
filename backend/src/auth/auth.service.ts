import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    // 사용자 인증 로직
    validatorUser(uuser: string) {

    }

    // JWT 토큰 발급
    async login(user: any) {
        console.log('jwt token', user)
        const payload = {
            email: user.email,
            sub: user.id
        }
        const token = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '24h'
        })
        return token

    }
}
