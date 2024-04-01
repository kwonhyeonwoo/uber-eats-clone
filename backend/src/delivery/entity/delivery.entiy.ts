import { Auth } from "src/auth/entites/auth.entity";
import { CoreEntity } from "src/common/entites/core.entity";
import { Entity, JoinColumn, OneToOne } from "typeorm";

@Entity()
export class Delivery extends CoreEntity {
    @OneToOne(() => Auth, (auth) => auth.delivery)
    @JoinColumn(({ name: 'auth_id' }))
    auth: Auth
}