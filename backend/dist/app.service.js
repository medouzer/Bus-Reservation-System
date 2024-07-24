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
exports.appService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const users_service_1 = require("./users/users.service");
const constant_1 = require("./constant");
let appService = class appService {
    constructor(userService) {
        this.userService = userService;
    }
    async handleCron() {
        console.log("Cron : lear all reservation ...");
        await this.userService.updateAllReservations();
    }
};
exports.appService = appService;
__decorate([
    (0, schedule_1.Cron)(constant_1._CostumCronExpression.EVERY_HOUR_FROM_9PM_TO_6AM_AT_MIN_15),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], appService.prototype, "handleCron", null);
exports.appService = appService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], appService);
//# sourceMappingURL=app.service.js.map