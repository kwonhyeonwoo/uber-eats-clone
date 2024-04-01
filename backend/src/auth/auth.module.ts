import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthGuards } from './auth.guard';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entites/user.entity';
import { Owner } from 'src/owner/entites/owner.entity';
import { Delivery } from 'src/delivery/entity/delivery.entiy';
import { Auth } from './entites/auth.entity';
import { JwtTokenModule } from 'src/jwt/jwt.module';
import { JwtStrategy } from 'src/jwt/jwt-strategy';


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Owner, Delivery, Auth]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60h' },
        }),
        JwtTokenModule
    ],
    providers: [AuthService, AuthGuards, JwtStrategy],
    exports: [AuthService, AuthGuards],
    controllers: [AuthController], // JwtModule과 AuthGuards를 내보냅니다.
})
export class AuthModule { }
