import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'Invalid email' })
    @IsNotEmpty()
    readonly email: string;  // Added email validation

    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    readonly password: string;
}
