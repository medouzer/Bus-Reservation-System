"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationlineModule = void 0;
const common_1 = require("@nestjs/common");
const reservationline_service_1 = require("./reservationline.service");
const reservationline_controller_1 = require("./reservationline.controller");
const mongoose_1 = require("@nestjs/mongoose");
const reservationLine_schema_1 = require("../schemas/reservationLine.schema");
const bus_time_module_1 = require("../bus-time/bus-time.module");
const bus_module_1 = require("../bus/bus.module");
const station_module_1 = require("../station/station.module");
const user_reservation_module_1 = require("../user-reservation/user-reservation.module");
const users_module_1 = require("../users/users.module");
const admin_module_1 = require("../admin/admin.module");
const jwt_1 = require("@nestjs/jwt");
const casl_module_1 = require("../Casl/casl.module");
let ReservationlineModule = class ReservationlineModule {
};
exports.ReservationlineModule = ReservationlineModule;
exports.ReservationlineModule = ReservationlineModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'ReservationLine', schema: reservationLine_schema_1.ReservationLineSchema, collection: 'reservation-lines' },
            ]),
            (0, common_1.forwardRef)(() => admin_module_1.AdminModule),
            (0, common_1.forwardRef)(() => bus_module_1.BusModule),
            (0, common_1.forwardRef)(() => bus_time_module_1.BusTimeModule),
            (0, common_1.forwardRef)(() => ReservationlineModule),
            (0, common_1.forwardRef)(() => station_module_1.StationModule),
            (0, common_1.forwardRef)(() => user_reservation_module_1.UserReservationModule),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => jwt_1.JwtModule),
            (0, common_1.forwardRef)(() => casl_module_1.AbilityModule),
        ],
        controllers: [reservationline_controller_1.ReservationlineController],
        providers: [reservationline_service_1.ReservationlineService],
        exports: [reservationline_service_1.ReservationlineService]
    })
], ReservationlineModule);
//# sourceMappingURL=reservationline.module.js.map