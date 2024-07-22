import { ApiProperty } from "@nestjs/swagger";

export class UserReservationDto {
    // BusId?: string;

    UserId?: string;

    @ApiProperty({
        type: String,
        description: 'Station ID',
        example: 'xxxxxxxxxxxxxxxxxxxxxxxx',
        required: true
    })
    StationId: string;

    @ApiProperty({
        type: String,
        description: 'Bus Time ID',
        example: 'xxxxxxxxxxxxxxxxxxxxxxxx',
        required: true
    })
    BusTimeId: string;
}