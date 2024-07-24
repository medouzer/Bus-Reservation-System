"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
const account_controller_1 = require("./account.controller");
const admin_module_1 = require("../../admin/admin.module");
const bus_time_module_1 = require("../../bus-time/bus-time.module");
const bus_module_1 = require("../../bus/bus.module");
const reservationline_module_1 = require("../../reservationline/reservationline.module");
const station_module_1 = require("../../station/station.module");
const user_reservation_module_1 = require("../../user-reservation/user-reservation.module");
const users_module_1 = require("../../users/users.module");
const jwt_strategy_1 = require("../strategies/jwt.strategy");
let AccountModule = class AccountModule {
};
exports.AccountModule = AccountModule;
exports.AccountModule = AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => admin_module_1.AdminModule),
            (0, common_1.forwardRef)(() => bus_module_1.BusModule),
            (0, common_1.forwardRef)(() => bus_time_module_1.BusTimeModule),
            (0, common_1.forwardRef)(() => reservationline_module_1.ReservationlineModule),
            (0, common_1.forwardRef)(() => station_module_1.StationModule),
            (0, common_1.forwardRef)(() => user_reservation_module_1.UserReservationModule),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        controllers: [account_controller_1.AccountController],
        providers: [account_service_1.AccountService, jwt_strategy_1.JwtStrategy],
        exports: [
            account_service_1.AccountService
        ]
    })
], AccountModule);
//# sourceMappingURL=account.module.js.map