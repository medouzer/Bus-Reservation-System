import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from 'src/schemas/users.schema';
import { BusTimeModule } from 'src/bus-time/bus-time.module';
import { BusModule } from 'src/bus/bus.module';
import { StationModule } from 'src/station/station.module';
import { UserReservationModule } from 'src/user-reservation/user-reservation.module';
import { AdminModule } from 'src/admin/admin.module';
import { ReservationlineModule } from 'src/reservationline/reservationline.module';
import { JwtModule } from '@nestjs/jwt';
import { AbilityModule } from 'src/Casl/casl.module';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema, collection: 'users' }
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
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule { }