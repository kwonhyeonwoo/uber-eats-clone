import { IsString } from "class-validator";
import { CoreEntity } from "src/common/entites/core.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { Restaurants } from "./restaurants.entity";

@Entity()
export class Category extends CoreEntity {
    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    coverImage: string;

    @OneToMany(
        (type) => Restaurants,
        (restaurant) => restaurant.category
    )
    restaurants: Restaurants[]
}