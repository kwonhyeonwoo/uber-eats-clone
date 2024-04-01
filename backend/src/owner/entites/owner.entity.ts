import { Auth } from "src/auth/entites/auth.entity";
import { CoreEntity } from "src/common/entites/core.entity";
import { Restaurants } from "src/restaurants/entity/restaurants.entity";
import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Owner extends CoreEntity {
    @OneToOne(() => Auth, (auth) => auth.owner)
    @JoinColumn({ name: 'auth_id' })
    auth: Auth

    @OneToMany(() => Restaurants, (restaurants) => restaurants.owner)
    restaurants: Restaurants[]
}