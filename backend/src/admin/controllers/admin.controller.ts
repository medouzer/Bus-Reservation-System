import { Controller, Get, Post, Body, Patch, Param, Delete, forwardRef, Inject, UseGuards, Req } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { BusTimeService } from "src/bus-time/bus-time.service";
import { BusService } from "src/bus/bus.service";
import { StationService } from "src/station/station.service";
import { UserReservationService } from "src/user-reservation/user-reservation.service";
import { Reflector } from "@nestjs/core";
import { BaseAdminController } from "src/BaseController/baseAdmin.controller";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { CheckAbilities } from "src/decorators/abilities.decorator";
import { CaslAbilityGuard } from "src/guards/casl-ability.guard";

@ApiTags('admin')
@Controller("admin")
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
@CheckAbilities({ action: 'manage', subject: 'all' })
export class AdminController extends BaseAdminController {
    constructor(
        @Inject(forwardRef(() => UsersService)) protected readonly userServices: UsersService,
        @Inject(forwardRef(() => BusService)) protected readonly busService: BusService,
        @Inject(forwardRef(() => BusTimeService)) protected readonly busTimeService: BusTimeService,
        @Inject(forwardRef(() => StationService)) protected readonly stationService: StationService,
        @Inject(forwardRef(() => UserReservationService)) protected readonly userReservationService: UserReservationService,
        protected reflector: Reflector,
    ) {
        super();
    }
}