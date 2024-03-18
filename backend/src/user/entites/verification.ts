import { IsBoolean, IsString } from "class-validator";
import { CoreEntity } from "src/common/entites/core.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "./user.entity";
import { v4 as uuidv4 } from 'uuid';


@Entity()
export class Verification extends CoreEntity {
    @Column()
    @IsString()
    code: string

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @BeforeInsert()
    createCode(): void {
        this.code = uuidv4()
    }
}