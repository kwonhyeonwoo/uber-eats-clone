import { Body, Controller } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
    constructor(
        private readonly restaurantService: RestaurantsService,
    ) { }

}
