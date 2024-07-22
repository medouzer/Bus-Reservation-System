import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { UsersService } from "./users/users.service";
import { _CostumCronExpression } from "./constant";

@Injectable()
export class appService {
    constructor( private readonly userService: UsersService ) { }
    @Cron( _CostumCronExpression.EVERY_HOUR_FROM_9PM_TO_6AM_AT_MIN_15 )
    async handleCron() {
        console.log("Cron : lear all reservation ...");
        await this.userService.updateAllReservations();
    }
}
