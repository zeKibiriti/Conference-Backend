import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'registration'})
export class RegistrationForm {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    category: string;

    @Column()
    gender: string;

    @Column()
    firstname: string;

    @Column()
    middlename: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phoneNumber: string;

    @Column()
    description: string;

    @Column()
    createdAt: Date;

    @Column({nullable: true})
    authStrategy: string;
}