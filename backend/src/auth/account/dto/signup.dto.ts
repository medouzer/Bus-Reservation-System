import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { CreateUserDto } from "src/users/dto/user.dto";

const ValidationOptions = {
    // message: "Error something wrong",
}

export class SignupDto extends CreateUserDto {
    @ApiProperty({
        description: 'username',
        type: String,
        example: 'username',
        required: true
    })
    @IsString(ValidationOptions)
    @IsNotEmpty(ValidationOptions)
    username: string;

    @ApiProperty({
        description: 'FullName',
        type: String,
        example: 'FullName',
        required: true
    })
    @IsString(ValidationOptions)
    @IsNotEmpty(ValidationOptions)
    FullName: string;

    @ApiProperty({
        description: 'email',
        type: String,
        example: 'email',
        required: true
    })
    @IsEmail({}, ValidationOptions)
    @IsNotEmpty(ValidationOptions)
    email: string;

    @ApiProperty({
        description: 'UserAvatar',
        type: String,
        example: 'UserAvatar',
        required: true
    })
    @IsString(ValidationOptions)
    @IsNotEmpty(ValidationOptions)
    UserAvatar: string;

    @ApiProperty({
        description: 'password',
        type: String,
        example: 'password',
        required: true
    })
    @IsString(ValidationOptions)
    @IsNotEmpty(ValidationOptions)
    password: string;

    UserCurrentReservationId?: string;
    role?: string;
}