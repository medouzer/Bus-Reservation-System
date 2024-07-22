import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BusTimeService } from './bus-time.service';
import { ApiTags } from '@nestjs/swagger';
import { ConnectedUser } from 'src/decorators/user.Info.decorator';
import { UserInfoDto } from 'src/users/dto/user.info.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckAbilities } from 'src/decorators/abilities.decorator';
import { CaslAbilityGuard } from 'src/guards/casl-ability.guard';

@ApiTags('bus/time')
@Controller('bus/time')
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
@CheckAbilities({ action: 'read', subject: 'BusTime' })
export class BusTimeController {
    constructor(private readonly busTimeService: BusTimeService) { }

    @Get("current")
    findCurrentTime(@ConnectedUser() userInfo : UserInfoDto) {
        return this.busTimeService.findCurrentTime(userInfo);
    }
}
