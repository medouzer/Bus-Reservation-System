import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    readonly username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    readonly password: string;

    @IsEmail({}, { message: 'Invalid email' })
    @IsNotEmpty()
    readonly email: string;  // Added email validation
}
