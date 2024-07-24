import { StationService } from './station.service';
export declare class StationController {
    private readonly stationService;
    constructor(stationService: StationService);
    getStationList(): Promise<import("../schemas/station.schema").Station[]>;
    getStationById(id: string): Promise<import("../schemas/station.schema").Station>;
}
