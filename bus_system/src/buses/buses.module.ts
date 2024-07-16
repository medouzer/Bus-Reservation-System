import { Module } from '@nestjs/common';
import { BusesService } from './buses.service';
import { BusesController } from './buses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BusSchema } from './schemas/bus.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Bus', schema: BusSchema }]),
    AuthModule
  ],
  providers: [BusesService],
  controllers: [BusesController],
  exports: [MongooseModule]
})
export class BusesModule {}
