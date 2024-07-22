import { Module, forwardRef } from '@nestjs/common';
import { BusTimeService } from './bus-time.service';
import { BusTimeController } from './bus-time.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusTime, BusTimeSchema } from 'src/schemas/busTime.schema';
import { UsersModule } from 'src/users/users.module';
import { UserReservationModule } from 'src/user-reservation/user-reservation.module';
import { BusModule } from 'src/bus/bus.module';
import { StationModule } from 'src/station/station.module';
import { AdminModule } from 'src/admin/admin.module';
import { ReservationlineModule } from 'src/reservationline/reservationline.module';
import { JwtModule } from '@nestjs/jwt';
import { AbilityModule } from 'src/Casl/casl.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: BusTime.name, schema: BusTimeSchema, collection: 'bus-times'},
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
    controllers: [BusTimeController],
    providers: [BusTimeService],
    exports: [BusTimeService]
})
export class BusTimeModule { }
