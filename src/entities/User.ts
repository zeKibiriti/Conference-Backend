import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'user'})
export class RegistrationForm {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column({nullable: true})
    authStrategy: string;
}