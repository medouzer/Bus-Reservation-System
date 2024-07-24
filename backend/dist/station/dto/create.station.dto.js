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
exports.updateStationDto = exports.stationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class stationDto {
}
exports.stationDto = stationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the station',
        type: String,
        example: 'test_stationName',
        required: true
    }),
    __metadata("design:type", String)
], stationDto.prototype, "stationName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the station',
        type: Boolean,
        example: true,
        required: false
    }),
    __metadata("design:type", Boolean)
], stationDto.prototype, "stationStatus", void 0);
class updateStationDto extends stationDto {
}
exports.updateStationDto = updateStationDto;
//# sourceMappingURL=create.station.dto.js.map