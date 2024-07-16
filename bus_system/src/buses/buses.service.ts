import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bus } from './schemas/bus.schema';

@Injectable()
export class BusesService {
    constructor(
        @InjectModel(Bus.name)
        private busModel: Model<Bus>,
    ) { }

    async createBus(createBusDto: CreateBusDto) {
        const { busNumber, capacity, schedule } = createBusDto;

        const bus = new this.busModel({
            busNumber,
            capacity,
            schedule,
        });

        await bus.save();

        return bus;
    }

    async getallBuses() {
        const bus = await this.busModel.find().exec();
        return bus;
    }

    async getBusById(busNumber: string) {
        console.log(busNumber);
        const bus = await this.busModel.findOne({ busNumber }).exec();
        if (!bus) {
            throw new NotFoundException(`Bus with busNumber '${busNumber}' not found`);
        }

        return bus;
    }
}
