import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { createBusDto, addStationToBusDto, updateBusDto } from "src/bus/dto/create.bus.dto";
import { CaslAbilityGuard } from "src/guards/casl-ability.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { CheckAbilities } from "src/decorators/abilities.decorator";

@ApiTags('admin/bus')
@Controller("admin/bus")
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class AdminBusController extends AdminController {

    @Post("create")
    @CheckAbilities({ action: 'manage', subject: 'all' })
    @ApiBody({ type: createBusDto, required: true })
    createBus(@Body() bodyData: createBusDto) {
        return this.busService.create(bodyData);
    }

    @Post("addStationToBus")
    @CheckAbilities({ action: 'manage', subject: 'all' })
    @ApiBody({ type: addStationToBusDto, required: true })
    addStationToBus(@Body() bodyData: addStationToBusDto) {
        console.log('addStationToBus', bodyData);
        return this.busService.addNewStationToBus(bodyData);
    }

    @Get("all")
    @CheckAbilities({ action: 'read', subject: 'Bus' })
    GetbusList() {
        console.log('GetbusList 0');
        return this.busService.getBusList();
    }

    @Get(":id")
    @CheckAbilities({ action: 'read', subject: 'Bus' })
    getBusById(@Param("id") id: string) {
        return this.busService.findBusById(id);
    }

    @Patch(":id")
    @CheckAbilities({ action: 'update', subject: 'Bus' })
    @ApiBody({ type: updateBusDto, required: true })
    updateBus(@Param("id") id: string, @Body() bodyData: updateBusDto) {
        return this.busService.updateBus(id, bodyData);
    }

    @Delete("/:busId/removeStation/:stationId")
    @CheckAbilities({ action: 'manage', subject: 'all' })
    deleteStation(@Param("busId") busId: string, @Param("stationId") stationId: string) {
        return this.busService.removeStationFromBus({ busId: busId, stationIds: [stationId] });
    }
}