import { Module, forwardRef } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { JwtModule } from '@nestjs/jwt';
import { AbilityModule } from 'src/Casl/casl.module';
import { AdminModule } from 'src/admin/admin.module';
import { BusTimeModule } from 'src/bus-time/bus-time.module';
import { BusModule } from 'src/bus/bus.module';
import { ReservationlineModule } from 'src/reservationline/reservationline.module';
import { StationModule } from 'src/station/station.module';
import { UserReservationModule } from 'src/user-reservation/user-reservation.module';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        forwardRef(() => AdminModule),
        forwardRef(() => BusModule),
        forwardRef(() => BusTimeModule),
        forwardRef( () => ReservationlineModule),
        forwardRef(() => StationModule),
        forwardRef(() => UserReservationModule),
        forwardRef(() => UsersModule),
    ],

    controllers: [AccountController],
    providers: [AccountService, JwtStrategy],
    exports: [
        AccountService
    ]
})

export class AccountModule { }
