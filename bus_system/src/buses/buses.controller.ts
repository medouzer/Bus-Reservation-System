import { Controller, Post, Get, Param, UseGuards } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { BusesService } from './buses.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';


@UseGuards(AuthGuard())
@Controller('buses')
@UseGuards(RolesGuard)
export class BusesController {
    constructor(private readonly busesService: BusesService) { }

    @Post('/addBus')
    @Roles('admin')
    addBus(@Body() createBusDto: CreateBusDto) {
        return this.busesService.createBus(createBusDto);
    }

    @Get('/get_all_buses')
    @Roles('admin')
    get_all_buses() {
        return this.busesService.getallBuses();
    }

    @Get(':busNumber')
    @Roles('admin')
    get_bus_by_id(@Param('busNumber') busNumber: string) {
        return this.busesService.getBusById(busNumber);
    }
}
