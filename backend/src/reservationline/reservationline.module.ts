import { Module, forwardRef } from '@nestjs/common';
import { ReservationlineService } from './reservationline.service';
import { ReservationlineController } from './reservationline.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationLineSchema } from 'src/schemas/reservationLine.schema';
import { BusTimeModule } from 'src/bus-time/bus-time.module';
import { BusModule } from 'src/bus/bus.module';
import { StationModule } from 'src/station/station.module';
import { UserReservationModule } from 'src/user-reservation/user-reservation.module';
import { UsersModule } from 'src/users/users.module';
import { AdminModule } from 'src/admin/admin.module';
import { JwtModule } from '@nestjs/jwt';
import { AbilityModule } from 'src/Casl/casl.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'ReservationLine', schema: ReservationLineSchema, collection: 'reservation-lines' },
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
    controllers: [ReservationlineController],
    providers: [ReservationlineService],
    exports: [ReservationlineService]
})
export class ReservationlineModule { }
