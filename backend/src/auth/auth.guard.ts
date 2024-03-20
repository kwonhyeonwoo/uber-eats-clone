import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthGuards implements CanActivate {
    constructor(private jwtService: JwtService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const authorization = request.headers.authorization;
        if (!authorization) throw new UnauthorizedException();

        const [scheme, token] = authorization.split(" ");
        if (scheme.toLowerCase() !== "bearer" || !token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            console.log('payload', payload); // 토큰의 payload를 로그로 출력, 실제 애플리케이션에서는 필요에 따라 사용하세요.
            request.user = payload;
            return true;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }
}