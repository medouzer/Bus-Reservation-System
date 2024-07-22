import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { stationDto, updateStationDto } from "src/station/dto/create.station.dto";
import { CaslAbilityGuard } from "src/guards/casl-ability.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { CheckAbilities } from "src/decorators/abilities.decorator";

@ApiTags('admin/station')
@Controller("admin/station")
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
@CheckAbilities({ action: 'manage', subject: 'Station' })
export class AdminStationController extends AdminController {

    @Post("create")
    @CheckAbilities({ action: 'manage', subject: 'all' })
    @ApiBody({ type: stationDto, required: true})
    create( @Body() station: stationDto ) {
        return this.stationService.create(station);
    }

    @Get("all")
    @CheckAbilities({ action: 'read', subject: 'Station' })
    getStationList() {
        return this.stationService.getStationList();
    }

    @Get("/get/:id")
    @CheckAbilities({ action: 'read', subject: 'Station' })
    getStationById( @Param("id") id: string ) {
        return this.stationService.findStationById(id);
    }

    @Patch("/update/:id")
    @ApiBody({ type: updateStationDto, required: true})
    @CheckAbilities({ action: 'manage', subject: 'all' })
    updateStation( @Param("id") id: string, @Body() station: updateStationDto ) {
        return this.stationService.updateStation(id, station);
    }
    
}