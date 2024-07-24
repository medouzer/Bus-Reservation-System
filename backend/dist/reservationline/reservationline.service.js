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
exports.ReservationlineService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reservationLine_schema_1 = require("../schemas/reservationLine.schema");
let ReservationlineService = class ReservationlineService {
    constructor(reservationLineDocument) {
        this.reservationLineDocument = reservationLineDocument;
    }
    async gettimeoftoday() {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
    }
    async createReservationLine(data) {
        data.date = await this.gettimeoftoday();
        return await new this.reservationLineDocument(data).save();
    }
    async reservationUpdate(data) {
        const reservation = await this.reservationLineDocument.findOne({ busTimeId: data.busTimeId, date: data.date });
        if (!reservation) {
            return await this.createReservationLine(data);
        }
        reservation.seats += 1;
        return await reservation.save();
    }
};
exports.ReservationlineService = ReservationlineService;
exports.ReservationlineService = ReservationlineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reservationLine_schema_1.ReservationLine.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReservationlineService);
//# sourceMappingURL=reservationline.service.js.map