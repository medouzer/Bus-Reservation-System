import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { Bus, BusDocument } from 'src/schemas/bus.schema';
import { StationService } from 'src/station/station.service';
import { addStationToBusDto, createBusDto, updateBusDto } from './dto/create.bus.dto';
import { HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class BusService {
    constructor(
        @InjectModel(Bus.name) private BusModel: Model<BusDocument>,
        @Inject(forwardRef( () => StationService)) private readonly stationService: StationService,
    ) { }

    async addStationToBus(busId: string, stationId: string): Promise<Bus> {
        return this.BusModel.findByIdAndUpdate(
            busId, {
                $push: {
                    stations: stationId
                }
            },
            { new: true }
        ).populate('stations').exec();
    }

    async create( createBusDto: createBusDto ): Promise<Bus> {
        try {
            const createdBus = new this.BusModel({
                busName: createBusDto.busName,
                busNumber: createBusDto.busNumber,
                stations: [],
                Capacity: 10,
            });
            return await createdBus.save();
        } catch (error) {
            throw new HttpException(
                {
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "Error creating bus",
                },
                HttpStatus.UNAUTHORIZED
            );
        }
    }
    
    async addNewStationToBus(data : addStationToBusDto): Promise<Bus> {
        try {
            const bus = await this.findBusById(data.busId);

            if (bus) {
                data.stationIds.forEach(async (stationId) => {
                    const station : any = await this.stationService.findStationById(stationId);
                    if (station) {
                        const isExist = bus.stations.find((item: any) => item._id == station._id);
                        if (!isExist) {
                            await this.addStationToBus(data.busId, station._id);
                        }
                    }
                });
            }
            return bus;
        } catch (error) {
            console.error('Error adding station to bus:', error.message);
            return null;
        }
    }
    
    async findBusById(busId: string): Promise<Bus> {
        return await this.BusModel.findById(busId).exec();
    }
    
    async getBusList(): Promise<Bus[]> {
        console.log('getBusList');
        return await this.BusModel.find().exec();
    }

    async updateBus(busId: string, bodyData: updateBusDto): Promise<Bus> {
        return this.BusModel.findByIdAndUpdate(busId, {
            $set: bodyData
        }, { new: true }).exec();
    }

    async removeStationFromBus(data: addStationToBusDto): Promise<Bus | null> {
        try {
            console.log('Removing station from bus:', data);

            const stationObjectId = new mongoose.Types.ObjectId(data.stationIds[0]);

            const updatedBus = await this.BusModel.findByIdAndUpdate(
                data.busId,
                {
                    $pull: {
                        stations: stationObjectId
                    }
                },
                { new: true }
            ).populate('stations').exec();
    
            if (!updatedBus) {
                console.log(`Bus with ID ${data.busId} not found`);
            }
    
            return updatedBus;
        } catch (error) {
            console.error('Error removing station from bus:', error);
            return null;
        }
    }
}