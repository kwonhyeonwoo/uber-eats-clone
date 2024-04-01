import { IsString } from "class-validator";
import { CoreEntity } from "src/common/entites/core.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Restaurants } from "./restaurants.entity";

@Entity()
export class Category extends CoreEntity {
    @Column()
    @IsString()
    name: 'Chicken' | 'Shish' | 'Piza' | 'Burger' | 'Pasta' | 'Chinese';

    @Column()
    @IsString()
    coverImage: string;

    @OneToMany(
        () => Restaurants,
        (restaurant) => restaurant.category
    )
    restaurants: Restaurants[]
}