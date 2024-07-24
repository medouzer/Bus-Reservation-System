import { UsersService } from "src/users/users.service";
import { BusTimeService } from "src/bus-time/bus-time.service";
import { BusService } from "src/bus/bus.service";
import { StationService } from "src/station/station.service";
import { UserReservationService } from "src/user-reservation/user-reservation.service";
import { Reflector } from "@nestjs/core";
import { BaseAdminController } from "src/BaseController/baseAdmin.controller";
export declare class AdminController extends BaseAdminController {
    protected readonly userServices: UsersService;
    protected readonly busService: BusService;
    protected readonly busTimeService: BusTimeService;
    protected readonly stationService: StationService;
    protected readonly userReservationService: UserReservationService;
    protected reflector: Reflector;
    constructor(userServices: UsersService, busService: BusService, busTimeService: BusTimeService, stationService: StationService, userReservationService: UserReservationService, reflector: Reflector);
}
