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
exports.StationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const station_schema_1 = require("../schemas/station.schema");
let StationService = class StationService {
    constructor(StationModel) {
        this.StationModel = StationModel;
    }
    async create(station) {
        const createdStation = new this.StationModel({ stationName: station.stationName });
        return createdStation.save();
    }
    async getStationList() {
        return this.StationModel.find().exec();
    }
    async findStationById(stationId) {
        return this.StationModel.findById(stationId).exec();
    }
    async updateStation(stationId, station) {
        return this.StationModel.findByIdAndUpdate(stationId, {
            $set: {
                stationName: station.stationName
            }
        }, { new: true }).exec();
    }
};
exports.StationService = StationService;
exports.StationService = StationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(station_schema_1.Station.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StationService);
//# sourceMappingURL=station.service.js.map