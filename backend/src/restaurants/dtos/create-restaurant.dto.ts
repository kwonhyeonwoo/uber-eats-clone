import { PickType } from '@nestjs/mapped-types';
import { Restaurants } from "../entity/restaurants.entity";
import { IsString } from 'class-validator';

export class CreateRestaurant extends PickType(Restaurants, [
    'name',
    'coverImage',
    'address',
]) {
    @IsString()
    categoryName: string;
}