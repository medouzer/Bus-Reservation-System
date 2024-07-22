import { ApiProperty } from "@nestjs/swagger";

export class bustimeDto {
    @ApiProperty({
        description: 'Time of the bus',
        type: String,
        example: '12:00',
        required: true
    })
    time: string;
}

export class bustimeDtoResponse {
    _id: string;
    isCurrent: boolean;
    isOpen: boolean;
    isReserved: boolean;
    Hours: number;
    Minutes: number;
    FullTime: string;
}