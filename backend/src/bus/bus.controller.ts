import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BusService } from './bus.service';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckAbilities } from 'src/decorators/abilities.decorator';
import { CaslAbilityGuard } from 'src/guards/casl-ability.guard';

@ApiTags('bus')
@ApiCookieAuth('user_token')
@Controller('bus')
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
@CheckAbilities({ action: 'read', subject: 'Bus' })
export class BusController {
    constructor(private readonly busService: BusService) { }

    @Get("all")
    GetbusList() {
        console.log('GetbusList 0');
        return this.busService.getBusList();
    }

    @Get(":id")
    getBusById(@Param("id") id: string) {
        return this.busService.findBusById(id);
    }
}
