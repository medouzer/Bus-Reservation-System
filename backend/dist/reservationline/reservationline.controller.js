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
exports.ReservationlineController = exports.CreateReservationLineDto = void 0;
const common_1 = require("@nestjs/common");
const reservationline_service_1 = require("./reservationline.service");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
class CreateReservationLineDto {
}
exports.CreateReservationLineDto = CreateReservationLineDto;
let ReservationlineController = class ReservationlineController {
    constructor(reservationlineService) {
        this.reservationlineService = reservationlineService;
    }
};
exports.ReservationlineController = ReservationlineController;
exports.ReservationlineController = ReservationlineController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('reservationline'),
    __metadata("design:paramtypes", [reservationline_service_1.ReservationlineService])
], ReservationlineController);
//# sourceMappingURL=reservationline.controller.js.map