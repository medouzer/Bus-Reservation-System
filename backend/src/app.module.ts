import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { BusModule } from './bus/bus.module';
import { StationModule } from './station/station.module';
import { BusTimeModule } from './bus-time/bus-time.module';
import { UserReservationModule } from './user-reservation/user-reservation.module';
import { appService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { AdminModule } from './admin/admin.module';
import { APP_GUARD } from '@nestjs/core';
import { ReservationlineModule } from './reservationline/reservationline.module';
import { SeederModule } from './database/seeder/seeder.module';
import { AccountModule } from './auth/account/account.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({ isGlobal: true }),

        MongooseModule.forRootAsync({
            useFactory: () => ({
                uri: process.env.MONGO_URI,
                dbName: "BusManager",
            }),
        }),

        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' },
        }),

        forwardRef(() => AdminModule),
        forwardRef(() => AccountModule),
        forwardRef(() => BusModule),
        forwardRef(() => BusTimeModule),
        forwardRef(() => ReservationlineModule),
        forwardRef(() => StationModule),
        forwardRef(() => UserReservationModule),
        forwardRef(() => UsersModule),
        forwardRef(() => SeederModule),
    ],
    controllers: [],
    providers: [
        appService,
    ],
})
export class AppModule { }
