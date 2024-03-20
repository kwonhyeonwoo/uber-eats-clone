import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthGuards } from './auth.guard'; // 올바른 경로를 사용하세요.
import { JwtStrategy } from 'src/jwt/jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60h' },
        }),
    ],
    providers: [AuthService, JwtStrategy, AuthGuards],
    exports: [AuthService, JwtModule, AuthGuards], // JwtModule과 AuthGuards를 내보냅니다.
})
export class AuthModule { }
