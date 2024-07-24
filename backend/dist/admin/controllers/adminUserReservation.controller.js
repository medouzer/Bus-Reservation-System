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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserReservationController = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const swagger_1 = require("@nestjs/swagger");
const casl_ability_guard_1 = require("../../guards/casl-ability.guard");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const abilities_decorator_1 = require("../../decorators/abilities.decorator");
let AdminUserReservationController = class AdminUserReservationController extends admin_controller_1.AdminController {
    async findAllReservation() {
        return this.userReservationService.findAllReservation();
    }
};
exports.AdminUserReservationController = AdminUserReservationController;
__decorate([
    (0, common_1.Get)("all"),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'read', subject: 'UserReservation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUserReservationController.prototype, "findAllReservation", null);
exports.AdminUserReservationController = AdminUserReservationController = __decorate([
    (0, swagger_1.ApiTags)('admin/user/reservation'),
    (0, common_1.Controller)("admin/user/reservation"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, casl_ability_guard_1.CaslAbilityGuard)
], AdminUserReservationController);
//# sourceMappingURL=adminUserReservation.controller.js.map