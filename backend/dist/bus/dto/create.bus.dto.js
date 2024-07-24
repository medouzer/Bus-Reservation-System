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
exports.updateBusDto = exports.addStationToBusDto = exports.createBusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class createBusDto {
    constructor() {
        this.busStatus = true;
    }
}
exports.createBusDto = createBusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the bus',
        type: String,
        example: 'test_busName',
        required: true
    }),
    __metadata("design:type", String)
], createBusDto.prototype, "busName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of the bus',
        type: String,
        example: 'test_busNumber',
        required: true
    }),
    __metadata("design:type", String)
], createBusDto.prototype, "busNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status of the bus',
        type: Boolean,
        example: true,
        required: false
    }),
    __metadata("design:type", Boolean)
], createBusDto.prototype, "busStatus", void 0);
class addStationToBusDto {
}
exports.addStationToBusDto = addStationToBusDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bus id',
        type: String,
        example: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
        required: true
    }),
    __metadata("design:type", String)
], addStationToBusDto.prototype, "busId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'One or more station id',
        type: [String],
        example: ['xxxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxxxx'],
        required: true
    }),
    __metadata("design:type", Array)
], addStationToBusDto.prototype, "stationIds", void 0);
class updateBusDto extends createBusDto {
}
exports.updateBusDto = updateBusDto;
//# sourceMappingURL=create.bus.dto.js.map