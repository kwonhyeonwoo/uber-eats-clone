import { Body, Controller, Get, Patch, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }
}