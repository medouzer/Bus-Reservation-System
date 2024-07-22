import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { UserReservationService } from './user-reservation.service';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ConnectedUser } from 'src/decorators/user.Info.decorator';
import { AlreadyLoggedInGuard } from 'src/guards/auth.guard';
import { UserReservationDto } from './dto/user.reservation.dto';
import { UserInfoDto } from 'src/users/dto/user.info.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckAbilities } from 'src/decorators/abilities.decorator';
import { CaslAbilityGuard } from 'src/guards/casl-ability.guard';

@ApiTags('user-reservation')
@Controller('user-reservation')
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
@CheckAbilities({ action: 'manage', subject: 'UserReservation' })
export class UserReservationController {
    constructor(private readonly userReservationService: UserReservationService) { }

    @Post("create")
    @ApiBody({ type: UserReservationDto, required: true })
    async create(@Body() data: UserReservationDto, @ConnectedUser() userInfo: any) {
        data.UserId = userInfo.userId;
        return this.userReservationService.createReservation(data, userInfo);
    }

    @Delete("cancel")
    async cancelReservation( @ConnectedUser() userInfo: UserInfoDto) {
        return this.userReservationService.cancelReservation(userInfo);
    }
}
