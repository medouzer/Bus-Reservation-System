import { ApiProperty } from "@nestjs/swagger";

export class stationDto {
    @ApiProperty({
        description: 'Name of the station',
        type: String,
        example: 'test_stationName',
        required: true
    })
    stationName: string;

    @ApiProperty({
        description: 'Status of the station',
        type: Boolean,
        example: true,
        required: false
    })
    stationStatus: boolean;
}

export class updateStationDto extends stationDto {}