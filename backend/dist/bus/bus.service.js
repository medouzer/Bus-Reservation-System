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
exports.BusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const bus_schema_1 = require("../schemas/bus.schema");
const station_service_1 = require("../station/station.service");
const common_2 = require("@nestjs/common");
let BusService = class BusService {
    constructor(BusModel, stationService) {
        this.BusModel = BusModel;
        this.stationService = stationService;
    }
    async addStationToBus(busId, stationId) {
        return this.BusModel.findByIdAndUpdate(busId, {
            $push: {
                stations: stationId
            }
        }, { new: true }).populate('stations').exec();
    }
    async create(createBusDto) {
        try {
            const createdBus = new this.BusModel({
                busName: createBusDto.busName,
                busNumber: createBusDto.busNumber,
                stations: [],
                Capacity: 10,
            });
            return await createdBus.save();
        }
        catch (error) {
            throw new common_2.HttpException({
                statusCode: common_2.HttpStatus.UNAUTHORIZED,
                message: "Error creating bus",
            }, common_2.HttpStatus.UNAUTHORIZED);
        }
    }
    async addNewStationToBus(data) {
        try {
            const bus = await this.findBusById(data.busId);
            if (bus) {
                data.stationIds.forEach(async (stationId) => {
                    const station = await this.stationService.findStationById(stationId);
                    if (station) {
                        const isExist = bus.stations.find((item) => item._id == station._id);
                        if (!isExist) {
                            await this.addStationToBus(data.busId, station._id);
                        }
                    }
                });
            }
            return bus;
        }
        catch (error) {
            console.error('Error adding station to bus:', error.message);
            return null;
        }
    }
    async findBusById(busId) {
        return await this.BusModel.findById(busId).exec();
    }
    async getBusList() {
        console.log('getBusList');
        return await this.BusModel.find().exec();
    }
    async updateBus(busId, bodyData) {
        return this.BusModel.findByIdAndUpdate(busId, {
            $set: bodyData
        }, { new: true }).exec();
    }
    async removeStationFromBus(data) {
        try {
            console.log('Removing station from bus:', data);
            const stationObjectId = new mongoose.Types.ObjectId(data.stationIds[0]);
            const updatedBus = await this.BusModel.findByIdAndUpdate(data.busId, {
                $pull: {
                    stations: stationObjectId
                }
            }, { new: true }).populate('stations').exec();
            if (!updatedBus) {
                console.log(`Bus with ID ${data.busId} not found`);
            }
            return updatedBus;
        }
        catch (error) {
            console.error('Error removing station from bus:', error);
            return null;
        }
    }
};
exports.BusService = BusService;
exports.BusService = BusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bus_schema_1.Bus.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => station_service_1.StationService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        station_service_1.StationService])
], BusService);
//# sourceMappingURL=bus.service.js.map