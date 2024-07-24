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
exports.UserReservationController = void 0;
const common_1 = require("@nestjs/common");
const user_reservation_service_1 = require("./user-reservation.service");
const swagger_1 = require("@nestjs/swagger");
const user_Info_decorator_1 = require("../decorators/user.Info.decorator");
const user_reservation_dto_1 = require("./dto/user.reservation.dto");
const user_info_dto_1 = require("../users/dto/user.info.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const abilities_decorator_1 = require("../decorators/abilities.decorator");
const casl_ability_guard_1 = require("../guards/casl-ability.guard");
let UserReservationController = class UserReservationController {
    constructor(userReservationService) {
        this.userReservationService = userReservationService;
    }
    async create(data, userInfo) {
        data.UserId = userInfo.userId;
        return this.userReservationService.createReservation(data, userInfo);
    }
    async cancelReservation(userInfo) {
        return this.userReservationService.cancelReservation(userInfo);
    }
};
exports.UserReservationController = UserReservationController;
__decorate([
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiBody)({ type: user_reservation_dto_1.UserReservationDto, required: true }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_Info_decorator_1.ConnectedUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_reservation_dto_1.UserReservationDto, Object]),
    __metadata("design:returntype", Promise)
], UserReservationController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)("cancel"),
    __param(0, (0, user_Info_decorator_1.ConnectedUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_info_dto_1.UserInfoDto]),
    __metadata("design:returntype", Promise)
], UserReservationController.prototype, "cancelReservation", null);
exports.UserReservationController = UserReservationController = __decorate([
    (0, swagger_1.ApiTags)('user-reservation'),
    (0, common_1.Controller)('user-reservation'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, casl_ability_guard_1.CaslAbilityGuard),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'UserReservation' }),
    __metadata("design:paramtypes", [user_reservation_service_1.UserReservationService])
], UserReservationController);
//# sourceMappingURL=user-reservation.controller.js.map