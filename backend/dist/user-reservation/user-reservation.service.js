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
exports.UserReservationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const userReservation_schema_1 = require("../schemas/userReservation.schema");
const users_service_1 = require("../users/users.service");
const bus_time_service_1 = require("../bus-time/bus-time.service");
const constant_1 = require("../constant");
const reservationline_service_1 = require("../reservationline/reservationline.service");
let UserReservationService = class UserReservationService {
    constructor(userReservationModel, usersService, busTimeService, reservationlineService) {
        this.userReservationModel = userReservationModel;
        this.usersService = usersService;
        this.busTimeService = busTimeService;
        this.reservationlineService = reservationlineService;
    }
    async createReservation(data, userInfo) {
        try {
            const RequestedTime = await this.busTimeService.findOneById(data.BusTimeId);
            const CurrentUser = await this.usersService.findOneByid(data.UserId);
            const CurrentTime = await this.busTimeService.getCurrentTime();
            console.log('Current user', CurrentUser);
            if (CurrentUser) {
                const CurrentTime = await this.busTimeService.getCurrentTime();
                const getNextBusTime = await this.busTimeService.getNextBusTime(userInfo);
                if (RequestedTime.id != getNextBusTime._id || CurrentTime.getMinutes() < constant_1.ReservationStartTime) {
                    throw new Error("Bus time is not available");
                }
                if (CurrentTime.getMinutes() > constant_1.ReservationEndTime || CurrentTime.getHours() != RequestedTime.time.hours) {
                    throw new Error("Bus time is not available");
                }
                if (CurrentUser.UserCurrentReservationId) {
                    throw new Error("User already has a reservation");
                }
                const userReservation = await new this.userReservationModel(data).save();
                await this.usersService.updateCurrentReservation(data.UserId, userReservation._id);
                return userReservation;
            }
            console.log('User not found');
            return null;
        }
        catch (e) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
                message: e.message
            }, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async findAllReservation() {
        return this.userReservationModel.find().populate('UserId').populate('StationId').populate('BusTimeId').exec();
    }
    async findOnById(reservationId) {
        return await this.userReservationModel.findById(reservationId).populate('UserId').populate('StationId').populate('BusTimeId').exec();
    }
    async cancelReservation(userInfo) {
        const CurrentUser = await this.usersService.findOneByid(userInfo.userId);
        if (CurrentUser) {
            if (CurrentUser.UserCurrentReservationId) {
                const reservation = await this.findOnById(CurrentUser.UserCurrentReservationId);
                if (reservation) {
                    await this.userReservationModel.deleteOne({ _id: reservation._id });
                    await this.usersService.updateCurrentReservation(userInfo.userId, null);
                    return reservation;
                }
            }
        }
        return null;
    }
};
exports.UserReservationService = UserReservationService;
exports.UserReservationService = UserReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(userReservation_schema_1.UserReservation.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => bus_time_service_1.BusTimeService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => reservationline_service_1.ReservationlineService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService,
        bus_time_service_1.BusTimeService,
        reservationline_service_1.ReservationlineService])
], UserReservationService);
//# sourceMappingURL=user-reservation.service.js.map