import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";

const ValidationOptions = {
    // message: "Error something wrong",
}

export class SigninDto {
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
        description: 'password',
        type: String,
        example: 'password',
        required: true
    })
    @IsString(ValidationOptions)
    @IsNotEmpty(ValidationOptions)
    password: string;
}