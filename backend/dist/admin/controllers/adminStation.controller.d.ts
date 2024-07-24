import { AdminController } from "./admin.controller";
import { stationDto, updateStationDto } from "src/station/dto/create.station.dto";
export declare class AdminStationController extends AdminController {
    create(station: stationDto): Promise<import("../../schemas/station.schema").Station>;
    getStationList(): Promise<import("../../schemas/station.schema").Station[]>;
    getStationById(id: string): Promise<import("../../schemas/station.schema").Station>;
    updateStation(id: string, station: updateStationDto): Promise<import("../../schemas/station.schema").Station>;
}
