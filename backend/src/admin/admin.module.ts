import { Module, forwardRef } from '@nestjs/common';
import { AdminService } from './admin.service';
import {
    AdminController,
    AdminBusController,
    AdminBusTimeController,
    AdminStationController,
    AdminUserReservationController,
    AdminUsersController,
} from './controllers';

import { UsersModule } from 'src/users/users.module';
import { BusModule } from 'src/bus/bus.module';
import { BusTimeModule } from 'src/bus-time/bus-time.module';
import { StationModule } from 'src/station/station.module';
import { UserReservationModule } from 'src/user-reservation/user-reservation.module';
import { ReservationlineModule } from 'src/reservationline/reservationline.module';
import { JwtModule } from '@nestjs/jwt';
import { AbilityModule } from 'src/Casl/casl.module';
import { CaslAbilityGuard } from 'src/guards/casl-ability.guard';

@Module({
    imports: [
        forwardRef(() => AdminModule),
        forwardRef(() => BusModule),
        forwardRef(() => BusTimeModule),
        forwardRef( () => ReservationlineModule),
        forwardRef(() => StationModule),
        forwardRef(() => UserReservationModule),
        forwardRef(() => UsersModule),
        forwardRef(() => JwtModule),
        forwardRef(() => AbilityModule),
    ],
    
    controllers: [
        AdminController,
        AdminBusController,
        AdminBusTimeController,
        AdminStationController,
        AdminUserReservationController,
        AdminUsersController,
    ],
    providers: [AdminService, CaslAbilityGuard],
})
export class AdminModule { }