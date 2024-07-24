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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
const signup_dto_1 = require("./dto/signup.dto");
const swagger_1 = require("@nestjs/swagger");
const signin_dto_1 = require("./dto/signin.dto");
const auth_guard_1 = require("../../guards/auth.guard");
let AccountController = class AccountController {
    constructor(AccountService) {
        this.AccountService = AccountService;
    }
    async createAccount(bodyData) {
        return await this.AccountService.createAccount(bodyData);
    }
    async login(bodyData, res) {
        const jwtToken = await this.AccountService.login(bodyData);
        res.cookie('user_token', jwtToken, { httpOnly: true });
        res.send({ jwt: jwtToken });
    }
    async logout(res) {
        res.clearCookie('user_token');
        res.send('Logout successfully');
    }
};
exports.AccountController = AccountController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.NotLoggedInUser),
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiBody)({ type: signup_dto_1.SignupDto, required: true }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "createAccount", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.NotLoggedInUser),
    (0, common_1.Post)("login"),
    (0, swagger_1.ApiBody)({ type: signin_dto_1.SigninDto, required: true }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SigninDto, Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "login", null);
__decorate([
    (0, common_1.Get)("logout"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "logout", null);
exports.AccountController = AccountController = __decorate([
    (0, swagger_1.ApiTags)('Auth/account'),
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
//# sourceMappingURL=account.controller.js.map