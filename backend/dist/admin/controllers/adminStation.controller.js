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
exports.AdminStationController = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const swagger_1 = require("@nestjs/swagger");
const create_station_dto_1 = require("../../station/dto/create.station.dto");
const casl_ability_guard_1 = require("../../guards/casl-ability.guard");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const abilities_decorator_1 = require("../../decorators/abilities.decorator");
let AdminStationController = class AdminStationController extends admin_controller_1.AdminController {
    create(station) {
        return this.stationService.create(station);
    }
    getStationList() {
        return this.stationService.getStationList();
    }
    getStationById(id) {
        return this.stationService.findStationById(id);
    }
    updateStation(id, station) {
        return this.stationService.updateStation(id, station);
    }
};
exports.AdminStationController = AdminStationController;
__decorate([
    (0, common_1.Post)("create"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'all' }),
    (0, swagger_1.ApiBody)({ type: create_station_dto_1.stationDto, required: true }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_station_dto_1.stationDto]),
    __metadata("design:returntype", void 0)
], AdminStationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("all"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'read', subject: 'Station' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminStationController.prototype, "getStationList", null);
__decorate([
    (0, common_1.Get)("/get/:id"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'read', subject: 'Station' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminStationController.prototype, "getStationById", null);
__decorate([
    (0, common_1.Patch)("/update/:id"),
    (0, swagger_1.ApiBody)({ type: create_station_dto_1.updateStationDto, required: true }),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'all' }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_station_dto_1.updateStationDto]),
    __metadata("design:returntype", void 0)
], AdminStationController.prototype, "updateStation", null);
exports.AdminStationController = AdminStationController = __decorate([
    (0, swagger_1.ApiTags)('admin/station'),
    (0, common_1.Controller)("admin/station"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, casl_ability_guard_1.CaslAbilityGuard),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'Station' })
], AdminStationController);
//# sourceMappingURL=adminStation.controller.js.map