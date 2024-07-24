import { Model } from 'mongoose';
import { Bus, BusDocument } from 'src/schemas/bus.schema';
import { StationService } from 'src/station/station.service';
import { addStationToBusDto, createBusDto, updateBusDto } from './dto/create.bus.dto';
export declare class BusService {
    private BusModel;
    private readonly stationService;
    constructor(BusModel: Model<BusDocument>, stationService: StationService);
    addStationToBus(busId: string, stationId: string): Promise<Bus>;
    create(createBusDto: createBusDto): Promise<Bus>;
    addNewStationToBus(data: addStationToBusDto): Promise<Bus>;
    findBusById(busId: string): Promise<Bus>;
    getBusList(): Promise<Bus[]>;
    updateBus(busId: string, bodyData: updateBusDto): Promise<Bus>;
    removeStationFromBus(data: addStationToBusDto): Promise<Bus | null>;
}
