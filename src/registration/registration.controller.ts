import {Body, Controller, Get, HttpStatus, Param, Patch, Post, Res} from '@nestjs/common';
import { Response } from 'express';  // Correct import for Response
import { CreateRegisteredDto } from './registration.dto';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) {}

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const data = await this.registrationService.findAll();
            res.status(HttpStatus.OK).json(data);
        } catch (error) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
        }
    }

    @Post()
    async postRegistered(@Body() createRegisteredDto: CreateRegisteredDto, @Res() res: Response) {
        try {
            await this.registrationService.createRegistered(createRegisteredDto);
            // Registration was successful
            res.status(HttpStatus.CREATED).json({ message: 'Registration successful' });
        } catch (error) {
            // Handle the error and return an appropriate response
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Registration failed', error: error.message });
        }
    }

    @Patch(':id') // Update user by ID
    async updateRegistered(@Param('id') id: string, @Body() updateRegisteredDto: CreateRegisteredDto, @Res() res: Response) {
        try {
            // Call the service method to update the registered user
            const updatedUser = await this.registrationService.updateRegistered(id, updateRegisteredDto);

            if (updatedUser) {
                // Update was successful
                res.status(HttpStatus.OK).json({ message: 'User updated successfully', updatedUser });
            } else {
                // User with the given ID not found
                res.status(HttpStatus.NOT_FOUND).json({ error: 'User not found' });
            }
        } catch (error) {
            // Handle the error and return an appropriate response
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Update failed', error: error.message });
        }
    }
}
