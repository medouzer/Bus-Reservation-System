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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const user_Info_decorator_1 = require("../decorators/user.Info.decorator");
const user_info_dto_1 = require("./dto/user.info.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const abilities_decorator_1 = require("../decorators/abilities.decorator");
const casl_ability_guard_1 = require("../guards/casl-ability.guard");
let UsersController = class UsersController {
    constructor(UserService) {
        this.UserService = UserService;
    }
    async findCurrentUser(userInfo) {
        return this.UserService.getCurrentConnectedUser(userInfo);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)("current"),
    __param(0, (0, user_Info_decorator_1.ConnectedUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_info_dto_1.UserInfoDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findCurrentUser", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, casl_ability_guard_1.CaslAbilityGuard),
    (0, abilities_decorator_1.CheckAbilities)({ action: 'selfRead', subject: 'User' }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map