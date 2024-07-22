import { Controller, Get, UseGuards } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { ApiTags } from "@nestjs/swagger";
import { CaslAbilityGuard } from "src/guards/casl-ability.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { CheckAbilities } from "src/decorators/abilities.decorator";

@ApiTags('admin/user/reservation')
@Controller("admin/user/reservation")
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class AdminUserReservationController extends AdminController {

    @Get("all")
    @CheckAbilities({ action: 'read', subject: 'UserReservation' })
    async findAllReservation() {
        return this.userReservationService.findAllReservation();
    }
}