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
exports.AdminBusTimeController = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const swagger_1 = require("@nestjs/swagger");
const bus_time_dto_1 = require("../../bus-time/dto/bus-time.dto");
const casl_ability_guard_1 = require("../../guards/casl-ability.guard");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const abilities_decorator_1 = require("../../decorators/abilities.decorator");
let AdminBusTimeController = class AdminBusTimeController extends admin_controller_1.AdminController {
    create(data) {
        console.log(data);
        return this.busTimeService.create(data.time);
    }
    findAll() {
        return this.busTimeService.findAll();
    }
};
exports.AdminBusTimeController = AdminBusTimeController;
__decorate([
    (0, common_1.Post)("create"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'all' }),
    (0, swagger_1.ApiBody)({ type: bus_time_dto_1.bustimeDto, required: true }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bus_time_dto_1.bustimeDto]),
    __metadata("design:returntype", void 0)
], AdminBusTimeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("all"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'read', subject: 'BusTime' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminBusTimeController.prototype, "findAll", null);
exports.AdminBusTimeController = AdminBusTimeController = __decorate([
    (0, swagger_1.ApiTags)('admin/bus/time'),
    (0, common_1.Controller)("admin/bus/time"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, casl_ability_guard_1.CaslAbilityGuard)
], AdminBusTimeController);
//# sourceMappingURL=adminBusTime.controller.js.map