import { Module } from '@nestjs/common';
import { AuthService } from './jwt.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'dksjfdkjflkjslk', // 비밀키
      signOptions: { expiresIn: '2000m' }, // 토큰 만료 시간
    }),
  ],
  providers: [AuthService]
})
export class AuthModule {
}
