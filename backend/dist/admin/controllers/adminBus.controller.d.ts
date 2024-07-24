import { AdminController } from "./admin.controller";
import { createBusDto, addStationToBusDto, updateBusDto } from "src/bus/dto/create.bus.dto";
export declare class AdminBusController extends AdminController {
    createBus(bodyData: createBusDto): Promise<import("../../schemas/bus.schema").Bus>;
    addStationToBus(bodyData: addStationToBusDto): Promise<import("../../schemas/bus.schema").Bus>;
    GetbusList(): Promise<import("../../schemas/bus.schema").Bus[]>;
    getBusById(id: string): Promise<import("../../schemas/bus.schema").Bus>;
    updateBus(id: string, bodyData: updateBusDto): Promise<import("../../schemas/bus.schema").Bus>;
    deleteStation(busId: string, stationId: string): Promise<import("../../schemas/bus.schema").Bus>;
}
