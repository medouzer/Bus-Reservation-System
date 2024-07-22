import { Module, forwardRef } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';
import { Bus, BusSchema } from 'src/schemas/bus.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { StationModule } from 'src/station/station.module';
import { BusTimeModule } from 'src/bus-time/bus-time.module';
import { UserReservationModule } from 'src/user-reservation/user-reservation.module';
import { UsersModule } from 'src/users/users.module';
import { AdminModule } from 'src/admin/admin.module';
import { ReservationlineModule } from 'src/reservationline/reservationline.module';
import { JwtModule } from '@nestjs/jwt';
import { AbilityModule } from 'src/Casl/casl.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Bus.name, schema: BusSchema, collection: 'buses' }]),
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
    controllers: [BusController],
    providers: [BusService],
    exports: [BusService],
})

export class BusModule { }
