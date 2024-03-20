import { IsBoolean, IsEmail, IsString } from "class-validator";
import { CoreEntity } from "src/common/entites/core.entity";
import { Restaurants } from "src/restaurants/entity/restaurants.entity";
import { Column, Entity, OneToMany } from "typeorm";


type UserRole = 'clinet' | 'owner' | 'delivery'

@Entity()
export class User extends CoreEntity {
    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    nickName: string;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    password: string;

    // @Column()
    // @IsString()
    // role: UserRole


    @OneToMany((type) => Restaurants, (restaurants) => restaurants.owner)
    restaurants: Restaurants[]
}