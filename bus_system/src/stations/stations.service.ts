import { Injectable, NotFoundException } from '@nestjs/common';
import { Station } from './schemas/station.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bus } from '../buses/schemas/bus.schema';

@Injectable()
export class StationsService {
    constructor(
        @InjectModel(Station.name)
        private stationModel: Model<Station>,
        @InjectModel(Bus.name)
        private busModel: Model<Bus>,
    ) {}

    async createStation(name, bus_Id) {
        const bus = await this.busModel.findOne({ Bus_Id: bus_Id });
        if (!bus) {
            throw new NotFoundException('Bus not found');
        }
        const station = new this.stationModel({
            name,
            bus_Id,
        });
        station.save();
        return station;
    }
}
