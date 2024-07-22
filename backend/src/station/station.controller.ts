import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StationService } from './station.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckAbilities } from 'src/decorators/abilities.decorator';
import { CaslAbilityGuard } from 'src/guards/casl-ability.guard';

@ApiTags('Station')
@Controller('station')
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
@CheckAbilities({ action: 'read', subject: 'Station' })
export class StationController {
    constructor(private readonly stationService: StationService) { }

    @Get("all")
    getStationList() {
        return this.stationService.getStationList();
    }

    @Get("/get/:id")
    getStationById( @Param("id") id: string ) {
        return this.stationService.findStationById(id);
    }
}
