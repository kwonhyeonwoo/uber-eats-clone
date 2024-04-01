import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entites/owner.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Owner]),
    AuthModule,
  ],
  providers: [OwnerService],
  controllers: [OwnerController]
})
export class OwnerModule { }
