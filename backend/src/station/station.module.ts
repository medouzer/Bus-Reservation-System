import { Module, forwardRef } from '@nestjs/common';
import { StationService } from './station.service';
import { StationController } from './station.controller';
import { Station, StationSchema} from 'src/schemas/station.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BusTimeModule } from 'src/bus-time/bus-time.module';
import { BusModule } from 'src/bus/bus.module';
import { UserReservationModule } from 'src/user-reservation/user-reservation.module';
import { UsersModule } from 'src/users/users.module';
import { AdminModule } from 'src/admin/admin.module';
import { ReservationlineModule } from 'src/reservationline/reservationline.module';
import { JwtModule } from '@nestjs/jwt';
import { AbilityModule } from 'src/Casl/casl.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Station.name, schema: StationSchema, collection: 'station' }
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
    controllers: [StationController],
    providers: [StationService],
    exports: [StationService]
})
export class StationModule { }
