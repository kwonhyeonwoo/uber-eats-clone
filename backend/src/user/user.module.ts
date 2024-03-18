import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entites/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { Verification } from './entites/verification';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Verification]),
        AuthModule
    ],
    providers: [UserService,],
    controllers: [UserController]
})
export class UserModule { }
