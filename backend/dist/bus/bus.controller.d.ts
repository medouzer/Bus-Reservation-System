import { BusService } from './bus.service';
export declare class BusController {
    private readonly busService;
    constructor(busService: BusService);
    GetbusList(): Promise<import("../schemas/bus.schema").Bus[]>;
    getBusById(id: string): Promise<import("../schemas/bus.schema").Bus>;
}
