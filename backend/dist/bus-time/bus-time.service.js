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
exports.BusTimeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const busTime_schema_1 = require("../schemas/busTime.schema");
const moment = require("moment-timezone");
const constant_1 = require("../constant");
const users_service_1 = require("../users/users.service");
const user_reservation_service_1 = require("../user-reservation/user-reservation.service");
let BusTimeService = class BusTimeService {
    constructor(busTimeModel, userServices, userReservationService) {
        this.busTimeModel = busTimeModel;
        this.userServices = userServices;
        this.userReservationService = userReservationService;
    }
    convertTime(time) {
        return time.split(':').map(Number);
    }
    async create(time) {
        const DataTime = this.convertTime(time);
        const createdTime = new this.busTimeModel({ time: { hours: DataTime[0], minutes: DataTime[1] } });
        return createdTime.save();
    }
    async findAll() {
        const workingHours = await this.busTimeModel.find().exec();
        return workingHours;
    }
    async findOneById(id) {
        const workingHour = await this.busTimeModel.findById(id).exec();
        return workingHour;
    }
    async getCurrentTime() {
        const moroccoMoment = moment.tz('Africa/Casablanca');
        moroccoMoment.add(1, 'hours');
        const moroccoDateString = moroccoMoment.format('YYYY-MM-DDTHH:mm:ss');
        const currentTime = new Date(moroccoDateString);
        return currentTime;
    }
    async findCurrentTime(userInfo) {
        let Respons = [];
        const currentTime = await this.getCurrentTime();
        const currentUser = await this.userServices.findOneByid(userInfo.userId);
        if (!currentUser) {
            return null;
        }
        const workingHours = await this.busTimeModel.find().exec();
        let UserReservation = null;
        if (currentUser.UserCurrentReservationId) {
            console.log("currentUser.UserCurrentReservationId : ", currentUser.UserCurrentReservationId);
            UserReservation = await this.userReservationService.findOnById(currentUser.UserCurrentReservationId);
            console.log(UserReservation);
        }
        const timeObject = new Date();
        workingHours.forEach((element) => {
            timeObject.setHours(element.time.hours);
            timeObject.setMinutes(element.time.minutes);
            if (timeObject.getHours() == currentTime.getHours()) {
                if (currentTime.getMinutes() > constant_1.ReservationStartTime && currentTime.getMinutes() < constant_1.ReservationEndTime) {
                    const Reserved = UserReservation != null && String(element._id) === String(UserReservation.BusTimeId._id);
                    Respons.push({
                        _id: element._id,
                        isCurrent: true,
                        isOpen: true,
                        isReserved: Reserved,
                        Hours: element.time.hours,
                        Minutes: element.time.minutes,
                        FullTime: `${element.time.hours}:${element.time.minutes}`
                    });
                }
                else {
                    Respons.push({
                        _id: element._id,
                        isCurrent: true,
                        isOpen: false,
                        isReserved: false,
                        Hours: element.time.hours,
                        Minutes: element.time.minutes,
                        FullTime: `${element.time.hours}:${element.time.minutes}`
                    });
                }
            }
            else {
                Respons.push({
                    _id: element._id,
                    isCurrent: false,
                    isOpen: false,
                    isReserved: false,
                    Hours: element.time.hours,
                    Minutes: element.time.minutes,
                    FullTime: `${element.time.hours}:${element.time.minutes}`
                });
            }
        });
        let startIndex = Respons.findIndex((element) => {
            return element.Hours == ((currentTime.getHours() != 2) ? currentTime.getHours() : (currentTime.getHours() + 1));
        });
        if (startIndex == -1) {
            return Respons;
        }
        const HoursOfBus = Respons.slice(startIndex);
        return HoursOfBus;
    }
    async getNextBusTime(userInfo) {
        const HoursOfBus = await this.findCurrentTime(userInfo);
        return HoursOfBus[0];
    }
};
exports.BusTimeService = BusTimeService;
exports.BusTimeService = BusTimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(busTime_schema_1.BusTime.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_reservation_service_1.UserReservationService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService,
        user_reservation_service_1.UserReservationService])
], BusTimeService);
//# sourceMappingURL=bus-time.service.js.map