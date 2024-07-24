"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const controllers_1 = require("./controllers");
const users_module_1 = require("../users/users.module");
const bus_module_1 = require("../bus/bus.module");
const bus_time_module_1 = require("../bus-time/bus-time.module");
const station_module_1 = require("../station/station.module");
const user_reservation_module_1 = require("../user-reservation/user-reservation.module");
const reservationline_module_1 = require("../reservationline/reservationline.module");
const jwt_1 = require("@nestjs/jwt");
const casl_module_1 = require("../Casl/casl.module");
const casl_ability_guard_1 = require("../guards/casl-ability.guard");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => AdminModule),
            (0, common_1.forwardRef)(() => bus_module_1.BusModule),
            (0, common_1.forwardRef)(() => bus_time_module_1.BusTimeModule),
            (0, common_1.forwardRef)(() => reservationline_module_1.ReservationlineModule),
            (0, common_1.forwardRef)(() => station_module_1.StationModule),
            (0, common_1.forwardRef)(() => user_reservation_module_1.UserReservationModule),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            (0, common_1.forwardRef)(() => jwt_1.JwtModule),
            (0, common_1.forwardRef)(() => casl_module_1.AbilityModule),
        ],
        controllers: [
            controllers_1.AdminController,
            controllers_1.AdminBusController,
            controllers_1.AdminBusTimeController,
            controllers_1.AdminStationController,
            controllers_1.AdminUserReservationController,
            controllers_1.AdminUsersController,
        ],
        providers: [admin_service_1.AdminService, casl_ability_guard_1.CaslAbilityGuard],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map