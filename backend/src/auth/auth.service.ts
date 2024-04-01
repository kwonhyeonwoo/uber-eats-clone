import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entites/auth.entity';
import { CreateAuthDto } from './dtos/create-auth.dto';
import { User } from 'src/user/entites/user.entity';
import { Owner } from 'src/owner/entites/owner.entity';
import { Delivery } from 'src/delivery/entity/delivery.entiy';
import { Response, Request } from 'express';
import { LoginAuthDto } from './dtos/login-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtTokenService } from 'src/jwt/jwt.service';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth) private readonly authRepo: Repository<Auth>,
        private readonly jwtTokenService: JwtTokenService
    ) { }

    async signup(body: CreateAuthDto, res: Response) {
        const {
            email,
            nickName,
            password,
            role,
            name
        } = body;

        const exists = await this.authRepo.findOne({
            where: { email, nickName }
        });
        const auth = await this.authRepo.findOne({
            where: { email }
        })
        // email, nickName 중복검사
        if (exists) {
            throw new BadRequestException({
                message: '이미 존재하는 회원입니다.'
            })
        }

        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(password, 5);

        if (role === 'client') {
            const newUser = new User()
            newUser.auth = auth;
        };

        if (role === 'owner') {
            const newOwner = new Owner()
            newOwner.auth = auth;
        }
        if (role === 'delivery') {
            const newDelivery = new Delivery()
            newDelivery.auth = auth;
        }
        if (role !== 'client' && role !== 'owner' && role !== 'delivery') {
            return res.status(404).json({ message: 'Role 설정이 잘못 되었습니다.' })
        }
        await this.authRepo.save({
            email,
            nickName,
            name,
            password: hashedPassword,
            role
        })
        return res.status(200).json({ message: '회원가입이 완료 되었습니다.' })
    }


    async signin(body: LoginAuthDto) {
        const { email, password } = body;
        const auth = await this.authRepo.findOne({
            where: { email }
        });

        if (!auth) {
            throw new BadRequestException({ message: '등록되지 않은 이메일 입니다' });
        }

        const hashedPassword = await bcrypt.compare(password, auth.password);

        if (!hashedPassword) {
            throw new UnauthorizedException('비밀번호가 올바르지 않습니다.');
        }

        const payload = {
            email: auth.email,
            sub: auth.id
        };

        const token = this.jwtTokenService.getAccessToken(payload);

        return { access_token: token };
    }

    async profile(req: any) {
        console.log('servidce', req.user)
        const auth = await this.authRepo.findOne({
            where: { email: req.user }
        })
        if (auth) {
            return auth
        }
    }
}
