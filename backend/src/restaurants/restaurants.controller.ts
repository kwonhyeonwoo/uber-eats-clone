import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurant } from './dtos/create-restaurant.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreateAccount } from 'src/user/dtos/create-account.dto';

@Controller('restaurants')
export class RestaurantsController {
    constructor(
        private readonly restaurantService: RestaurantsService,
    ) { }


    @Post('/create')
    @UseGuards(AuthGuard('jwt'))
    create(
        @Body() body: CreateRestaurant,
        @Req() req
    ) {
        console.log('res', req.user)
        return this.restaurantService.create(body, req.user.userId)
    }
}
