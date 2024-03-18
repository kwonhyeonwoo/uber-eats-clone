import { IsBoolean, IsEmail, IsString } from "class-validator";
import { CoreEntity } from "src/common/entites/core.entity";
import { Column, Entity } from "typeorm";


type UserRole = 'clinet' | 'owner' | 'delivery'

@Entity()
export class User extends CoreEntity {
    @Column()
    @IsEmail()
    email: string;

    @Column({ select: false })
    @IsString()
    password: string;

    @Column()
    @IsString()
    role: UserRole

    @Column({ default: false })
    @IsBoolean()
    verified: boolean;
}