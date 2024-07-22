import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Station, StationDocument } from 'src/schemas/station.schema';
import { stationDto, updateStationDto } from './dto/create.station.dto';

@Injectable()
export class StationService {
    constructor(
        @InjectModel(Station.name) private StationModel: Model<StationDocument>
    ) { }

    async create( station: stationDto ): Promise<Station> {
        const   createdStation = new this.StationModel({ stationName: station.stationName});
        return  createdStation.save();
    }
    
    async getStationList(): Promise<Station[]> {
        return this.StationModel.find().exec();
    }

    async findStationById( stationId: string ): Promise<Station> {
        return this.StationModel.findById(stationId).exec();
    }

    async updateStation( stationId: string, station: updateStationDto ): Promise<Station> {
        return this.StationModel.findByIdAndUpdate(stationId, {
            $set: {
                stationName: station.stationName
            }
        }, { new: true }).exec();
    }
}
