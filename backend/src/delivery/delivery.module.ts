import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from './entity/delivery.entiy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Delivery])
  ],
  providers: [
    DeliveryService
  ],
  controllers: [DeliveryController]
})
export class DeliveryModule { }
