import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt"
@Injectable()
export class JwtTokenService {
    constructor(
        private readonly jwtService: JwtService
    ) { }

    // Acess token 발급
    getAccessToken(auth: any) {
        return this.jwtService.sign(
            {
                email: auth.email,
                sub: auth.id
            },
            {
                secret: process.env.JWT_SECRET,
                expiresIn: '10m'
            }
        )
    }
}
