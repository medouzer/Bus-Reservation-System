import { IsString, IsInt, IsArray, ArrayNotEmpty} from 'class-validator';

export class CreateBusDto {
    @IsString()
    readonly busNumber: string;

    @IsInt()
    readonly capacity: number;

    @IsArray()
    @ArrayNotEmpty()
    readonly schedule: string[];  
}
