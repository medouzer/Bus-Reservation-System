"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusModule = void 0;
const common_1 = require("@nestjs/common");
const bus_service_1 = require("./bus.service");
const bus_controller_1 = require("./bus.controller");
const bus_schema_1 = require("../schemas/bus.schema");
const mongoose_1 = require("@nestjs/mongoose");
const station_module_1 = require("../station/station.module");
const bus_time_module_1 = require("../bus-time/bus-time.module");
const user_reservation_module_1 = require("../user-reservation/user-reservation.module");
const users_module_1 = require("../users/users.module");
const admin_module_1 = require("../admin/admin.module");
const reservationline_module_1 = require("../reservationline/reservationline.module");
const jwt_1 = require("@nestjs/jwt");
const casl_module_1 = require("../Casl/casl.module");
let BusModule = class BusModule {
};
exports.BusModule = BusModule;
exports.BusModule = BusModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: bus_schema_1.Bus.name, schema: bus_schema_1.BusSchema, collection: 'buses' }]),
            (0, common_1.forwardRef)(() => admin_module_1.AdminModule),
            (0, common_1.forwardRef)(() => BusModule),
            (0, common_1.forwardRef)(() => bus_time_module_1.BusTimeModule),
            (0, common_1.forwardRef)(() => reservationline_module_1.ReservationlineModule),
            (0, common_1.forwardRef)(() => station_module_1.StationModule),
            (0, common_1.forwardRef)(() => user_reservation_module_1.UserReservationModule),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => jwt_1.JwtModule),
            (0, common_1.forwardRef)(() => casl_module_1.AbilityModule),
        ],
        controllers: [bus_controller_1.BusController],
        providers: [bus_service_1.BusService],
        exports: [bus_service_1.BusService],
    })
], BusModule);
//# sourceMappingURL=bus.module.js.map