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
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const users_schema_1 = require("../../schemas/users.schema");
const config_1 = require("@nestjs/config");
let SeederService = class SeederService {
    constructor(userModel, configService) {
        this.userModel = userModel;
        this.configService = configService;
    }
    async seedAdmin() {
        const adminExists = await this.userModel.findOne({
            username: this.configService.get("ADMIN_USER")
        }).exec();
        if (adminExists) {
            console.log('Admin user already exists');
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.configService.get("ADMIN_PASS"), salt);
        const admin = new this.userModel({
            username: this.configService.get("ADMIN_USER"),
            FullName: this.configService.get("ADMIN_USER"),
            email: this.configService.get("ADMIN_MAIL"),
            UserAvatar: "test",
            password: hashedPassword,
            role: "admin"
        });
        await admin.save();
        console.log('Admin user created ', admin);
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], SeederService);
//# sourceMappingURL=seeder.service.js.map