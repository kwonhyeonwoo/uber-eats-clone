import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurants } from './entity/restaurants.entity';
import { Repository } from 'typeorm';
import { CreateRestaurant } from './dtos/create-restaurant.dto';
import { Profile } from 'src/user/dtos/profile.dto';
import { User } from 'src/user/entites/user.entity';

@Injectable()
export class RestaurantsService {
    constructor(
        @InjectRepository(Restaurants) private readonly restaurantRepo: Repository<Restaurants>,

    ) { }


    async create(
        body: CreateRestaurant,
        owner: User
    ) {
        console.log('owner', owner)
        const newRestaurant = await this.restaurantRepo.create(body);
        newRestaurant.owner = owner;
        const save = await this.restaurantRepo.save(newRestaurant);
        console.log('newRestaurant', save)
        return save
    }
}
