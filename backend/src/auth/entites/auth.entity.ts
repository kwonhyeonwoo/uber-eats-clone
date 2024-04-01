import { CoreEntity } from "src/common/entites/core.entity";
import { Delivery } from "src/delivery/entity/delivery.entiy";
import { Owner } from "src/owner/entites/owner.entity";
import { User } from "src/user/entites/user.entity";
import { Entity, Column, OneToOne, OneToMany } from "typeorm";

type Role = 'owner' | 'client' | 'delivery'

@Entity()
export class Auth extends CoreEntity {
    @Column()
    email: string;

    @Column()
    nickName: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    role: string;

    // 일반 회원
    @OneToOne(() => User, (user) => user.auth)
    user: User

    // 식당 점주
    @OneToOne(() => Owner, (owner) => owner.auth)
    owner: Owner

    // 배달원
    @OneToOne(() => Delivery, (delivery) => delivery.auth)
    delivery: Delivery


}

