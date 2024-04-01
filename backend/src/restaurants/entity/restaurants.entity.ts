import { IsString, Length } from "class-validator";
import { CoreEntity } from "src/common/entites/core.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Category } from "./category.entity";
import { User } from "src/user/entites/user.entity";
import { Owner } from "src/owner/entites/owner.entity";

@Entity()
export class Restaurants extends CoreEntity {
    @Column()
    @IsString()
    @Length(5)
    name: string

    @Column()
    @IsString()
    coverImage: string;

    @Column()
    @IsString()
    address: string;

    @ManyToOne(
        () => Category,
        (category) => category.restaurants,
        { nullable: true, onDelete: "SET NULL" }
    )
    category: Category;

    @ManyToOne(
        () => Owner,
        (owner) => owner.restaurants,
        { nullable: true, onDelete: "SET NULL" }
    )
    owner: Owner;
}