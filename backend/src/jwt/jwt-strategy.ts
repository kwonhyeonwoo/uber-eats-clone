import { PassportStrategy } from "@nestjs/passport";
import { request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 요청 헤더에서 JWT를 추출하는 방법
            ignoreExpiration: true, // 토큰 만료를 무시할지 여부
            secretOrKey: process.env.JWT_SECRET, // JWT 서명 검증을 위한 비밀키
        });
    }

    async validate(payload: any) {
        console.log('payload', payload);
        const data = {
            usreId: payload.email
        }

        return data.usreId
    }
}