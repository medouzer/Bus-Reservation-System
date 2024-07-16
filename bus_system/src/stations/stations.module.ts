import { Module } from '@nestjs/common';
import { StationsService } from './stations.service';
import { StationsController } from './stations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StationSchema } from './schemas/station.schema';
import { BusesModule } from '../buses/buses.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Station', schema: StationSchema }]),
    BusesModule
  ],
  providers: [StationsService],
  controllers: [StationsController]
})
export class StationsModule {}
