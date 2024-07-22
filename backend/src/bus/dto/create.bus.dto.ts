import { ApiProperty } from "@nestjs/swagger";

export class createBusDto {
    @ApiProperty({
        description: 'Name of the bus',
        type: String,
        example: 'test_busName',
        required: true
    })
    busName: string;

    @ApiProperty({
        description: 'Number of the bus',
        type: String,
        example: 'test_busNumber',
        required: true
    })
    busNumber: string;

    @ApiProperty({
        description: 'Status of the bus',
        type: Boolean,
        example: true,
        required: false
    })
    busStatus?: boolean = true;
}

export class addStationToBusDto {
    @ApiProperty({
        description: 'Bus id',
        type: String,
        example: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
        required: true
    })
    busId: string;

    // ApiProperty for stationId array
    @ApiProperty({
        description: 'One or more station id',
        type: [String],
        example: ['xxxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxxx'],
        required: true
    })

    stationIds: string[];
}

export class updateBusDto extends createBusDto { }