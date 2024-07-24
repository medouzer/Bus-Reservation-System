"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/users.service");
const bus_time_service_1 = require("../../bus-time/bus-time.service");
const bus_service_1 = require("../../bus/bus.service");
const station_service_1 = require("../../station/station.service");
const user_reservation_service_1 = require("../../user-reservation/user-reservation.service");
const core_1 = require("@nestjs/core");
const baseAdmin_controller_1 = require("../../BaseController/baseAdmin.controller");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const abilities_decorator_1 = require("../../decorators/abilities.decorator");
const casl_ability_guard_1 = require("../../guards/casl-ability.guard");
let AdminController = class AdminController extends baseAdmin_controller_1.BaseAdminController {
    constructor(userServices, busService, busTimeService, stationService, userReservationService, reflector) {
        super();
        this.userServices = userServices;
        this.busService = busService;
        this.busTimeService = busTimeService;
        this.stationService = stationService;
        this.userReservationService = userReservationService;
        this.reflector = reflector;
    }
};
exports.AdminController = AdminController;
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('admin'),
    (0, common_1.Controller)("admin"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, casl_ability_guard_1.CaslAbilityGuard),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'all' }),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => bus_service_1.BusService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => bus_time_service_1.BusTimeService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => station_service_1.StationService))),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_reservation_service_1.UserReservationService))),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        bus_service_1.BusService,
        bus_time_service_1.BusTimeService,
        station_service_1.StationService,
        user_reservation_service_1.UserReservationService,
        core_1.Reflector])
], AdminController);
//# sourceMappingURL=admin.controller.js.map