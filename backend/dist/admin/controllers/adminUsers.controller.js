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
exports.AdminUsersController = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const swagger_1 = require("@nestjs/swagger");
const signup_dto_1 = require("../../auth/account/dto/signup.dto");
const casl_ability_guard_1 = require("../../guards/casl-ability.guard");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const abilities_decorator_1 = require("../../decorators/abilities.decorator");
let AdminUsersController = class AdminUsersController extends admin_controller_1.AdminController {
    async GetAllUsers() {
        return await this.userServices.findAll();
    }
    async CreateDriver(bodyData) {
        bodyData.role = "driver";
        return await this.userServices.createAccount(bodyData);
    }
};
exports.AdminUsersController = AdminUsersController;
__decorate([
    (0, common_1.Get)(),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'read', subject: 'User' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "GetAllUsers", null);
__decorate([
    (0, common_1.Post)("create/driver"),
    (0, swagger_1.ApiBody)({ type: signup_dto_1.SignupDto, required: true }),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'manage', subject: 'all' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "CreateDriver", null);
exports.AdminUsersController = AdminUsersController = __decorate([
    (0, swagger_1.ApiTags)('admin/users'),
    (0, common_1.Controller)("admin/users"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, casl_ability_guard_1.CaslAbilityGuard)
], AdminUsersController);
//# sourceMappingURL=adminUsers.controller.js.map