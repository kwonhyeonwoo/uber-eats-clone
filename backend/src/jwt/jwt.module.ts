import { Module } from '@nestjs/common';
import { JwtTokenService } from './jwt.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '24h' }
            })
        })
    ],
    providers: [JwtTokenService],
    exports: [JwtTokenService]
})
export class JwtTokenModule { }
