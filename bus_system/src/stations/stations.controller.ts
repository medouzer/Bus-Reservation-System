import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { StationsService } from './stations.service';


@Controller('stations')
export class StationsController {
    constructor(private stationsService: StationsService) { }

    @Post('/addStation')
    addStation(@Body() name, bus_id) {
        return this.stationsService.createStation(name, bus_id);
    }
}
