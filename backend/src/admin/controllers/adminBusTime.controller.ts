import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { bustimeDto } from "src/bus-time/dto/bus-time.dto";
import { CaslAbilityGuard } from "src/guards/casl-ability.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { CheckAbilities } from "src/decorators/abilities.decorator";

@ApiTags('admin/bus/time')
@Controller("admin/bus/time")
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class AdminBusTimeController extends AdminController
{
    @Post("create")
    @CheckAbilities({ action: 'manage', subject: 'all' })
    @ApiBody({ type: bustimeDto, required: true })
    create(@Body() data: bustimeDto) {
        console.log(data);
        return this.busTimeService.create(data.time);
    }

    @Get("all")
    @CheckAbilities({ action: 'read', subject: 'BusTime' })
    findAll() {
        return this.busTimeService.findAll();
    }
}