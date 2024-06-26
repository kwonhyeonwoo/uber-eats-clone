import { Auth } from "src/auth/entites/auth.entity";
import { CoreEntity } from "src/common/entites/core.entity";
import { Entity, JoinColumn, OneToOne } from "typeorm";



@Entity()
export class User extends CoreEntity {
    @OneToOne(() => Auth, (auth) => auth.user)
    @JoinColumn({ name: 'auth_id' })
    auth: Auth;
}   