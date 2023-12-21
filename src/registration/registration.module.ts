import { Module } from '@nestjs/common';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RegistrationForm} from "../entities/RegistrationForm";

@Module({
  imports: [TypeOrmModule.forFeature([RegistrationForm])],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
