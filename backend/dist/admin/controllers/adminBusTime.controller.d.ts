import { AdminController } from "./admin.controller";
import { bustimeDto } from "src/bus-time/dto/bus-time.dto";
export declare class AdminBusTimeController extends AdminController {
    create(data: bustimeDto): Promise<import("../../schemas/busTime.schema").BusTime>;
    findAll(): Promise<import("../../schemas/busTime.schema").BusTime[]>;
}
