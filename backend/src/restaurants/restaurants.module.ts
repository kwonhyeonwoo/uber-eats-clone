import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { Restaurants } from './entity/restaurants.entity';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Category, Restaurants])
    ],
    providers: [RestaurantsService],
    controllers: [RestaurantsController]
})
export class RestaurantsModule {
}
