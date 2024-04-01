import { Controller, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';

@Controller('owner')
export class OwnerController {
    constructor(
        private readonly ownerService: OwnerService
    ) { }

    @Post('/signup')
    signup() {

    }
}
