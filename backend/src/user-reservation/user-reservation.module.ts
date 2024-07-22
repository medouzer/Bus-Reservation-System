import { Module, forwardRef } from '@nestjs/common';
import { UserReservationService } from './user-reservation.service';
import { UserReservationController } from './user-reservation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserReservationSchema } from 'src/schemas/userReservation.schema';
import { UsersModule } from 'src/users/users.module';
import { BusTimeModule } from 'src/bus-time/bus-time.module';
import { ReservationlineModule } from 'src/reservationline/reservationline.module';
import { BusModule } from 'src/bus/bus.module';
import { StationModule } from 'src/station/station.module';
import { AdminModule } from 'src/admin/admin.module';
import { JwtModule } from '@nestjs/jwt';
import { AbilityModule } from 'src/Casl/casl.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'UserReservation', schema: UserReservationSchema, collection: 'user-reservations' },
        ]),
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
    controllers: [UserReservationController],
    providers: [UserReservationService],
    exports: [UserReservationService]
})

export class UserReservationModule { }
