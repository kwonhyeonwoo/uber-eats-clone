import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { request } from "express";

export const CurrentAuth = createParamDecorator(
    (data: any, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        const accessToken = request;
        console.log('ddd', req)
        console.log('req user', req.user);

        return req.user;
    }
)