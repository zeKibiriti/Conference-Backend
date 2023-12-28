import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {RegistrationForm} from "../entities/RegistrationForm";
import {Repository} from "typeorm";
import {CreateRegisteredDto} from "./registration.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegistrationService {
    constructor(
        @InjectRepository(RegistrationForm)
        private registrationRepository: Repository<RegistrationForm>,
    ) {}

    async findAll(): Promise<RegistrationForm[]> {
        const data = await this.registrationRepository.find();
        if (!data || data.length === 0) {
            // Handle the case when there's no data, for example:
            throw new NotFoundException('No registration data found');
        }
        return data;
    }

    async createRegistered(createRegisteredDto: CreateRegisteredDto): Promise<void> {
        // Hash the password
        const hashedPassword = await bcrypt.hash(createRegisteredDto.password, 12);

        // Save the user to the database with the hashed password
        await this.registrationRepository.create({
            ...createRegisteredDto,
            password: hashedPassword,
        });
    }

    // async createRegistered(createRegisteredDto: CreateRegisteredDto) {
    //     // Map properties from DTO to entity
    //     const newRegistration = this.registrationRepository.create(createRegisteredDto);
    //     // Save the new registration
    //     return this.registrationRepository.save(newRegistration);
    // }

    async updateRegistered(id: string, updateRegisteredDto: CreateRegisteredDto): Promise<RegistrationForm | null> {
        // Implement your logic to update the registration by ID
        // ...

        // For example:
        // const existingUser = await this.registrationRepository.findOne(id);
        //
        // if (existingUser) {
        //     // Update properties based on the DTO
        //     existingUser.firstname = updateRegisteredDto.firstname;
        //     existingUser.lastname = updateRegisteredDto.lastname;
        //     // Update other properties as needed
        //
        //     // Save the updated user
        //     return this.registrationRepository.save(existingUser);
        // }

        return null; // Return null if the user with the given ID is not found
    }
}
