import { IsString, IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';
export class CreateRegisteredDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    country: string;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    gender: string;

    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsString()
    middlename: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsPhoneNumber() // 'ZZ' is a placeholder, you can replace it with the appropriate country code
    phoneNumber: string;

    @IsString()
    description: string;
}