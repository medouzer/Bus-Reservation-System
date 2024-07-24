import { Model } from 'mongoose';
import { Station, StationDocument } from 'src/schemas/station.schema';
import { stationDto, updateStationDto } from './dto/create.station.dto';
export declare class StationService {
    private StationModel;
    constructor(StationModel: Model<StationDocument>);
    create(station: stationDto): Promise<Station>;
    getStationList(): Promise<Station[]>;
    findStationById(stationId: string): Promise<Station>;
    updateStation(stationId: string, station: updateStationDto): Promise<Station>;
}
