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
exports.AdminBusController = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const swagger_1 = require("@nestjs/swagger");
const create_bus_dto_1 = require("../../bus/dto/create.bus.dto");
const casl_ability_guard_1 = require("../../guards/casl-ability.guard");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const abilities_decorator_1 = require("../../decorators/abilities.decorator");
let AdminBusController = class AdminBusController extends admin_controller_1.AdminController {
    createBus(bodyData) {
        return this.busService.create(bodyData);
    }
    addStationToBus(bodyData) {
        console.log('addStationToBus', bodyData);
        return this.busService.addNewStationToBus(bodyData);
    }
    GetbusList() {
        console.log('GetbusList 0');
        return this.busService.getBusList();
    }
    getBusById(id) {
        return this.busService.findBusById(id);
    }
    updateBus(id, bodyData) {
        return this.busService.updateBus(id, bodyData);
    }
    deleteStation(busId, stationId) {
        return this.busService.removeStationFromBus({ busId: busId, stationIds: [stationId] });
    }
};
exports.AdminBusController = AdminBusController;
__decorate([
    (0, common_1.Post)("create"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'all' }),
    (0, swagger_1.ApiBody)({ type: create_bus_dto_1.createBusDto, required: true }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bus_dto_1.createBusDto]),
    __metadata("design:returntype", void 0)
], AdminBusController.prototype, "createBus", null);
__decorate([
    (0, common_1.Post)("addStationToBus"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'all' }),
    (0, swagger_1.ApiBody)({ type: create_bus_dto_1.addStationToBusDto, required: true }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bus_dto_1.addStationToBusDto]),
    __metadata("design:returntype", void 0)
], AdminBusController.prototype, "addStationToBus", null);
__decorate([
    (0, common_1.Get)("all"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'read', subject: 'Bus' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminBusController.prototype, "GetbusList", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'read', subject: 'Bus' }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminBusController.prototype, "getBusById", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'update', subject: 'Bus' }),
    (0, swagger_1.ApiBody)({ type: create_bus_dto_1.updateBusDto, required: true }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_bus_dto_1.updateBusDto]),
    __metadata("design:returntype", void 0)
], AdminBusController.prototype, "updateBus", null);
__decorate([
    (0, common_1.Delete)("/:busId/removeStation/:stationId"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'all' }),
    __param(0, (0, common_1.Param)("busId")),
    __param(1, (0, common_1.Param)("stationId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminBusController.prototype, "deleteStation", null);
exports.AdminBusController = AdminBusController = __decorate([
    (0, swagger_1.ApiTags)('admin/bus'),
    (0, common_1.Controller)("admin/bus"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, casl_ability_guard_1.CaslAbilityGuard)
], AdminBusController);
//# sourceMappingURL=adminBus.controller.js.map