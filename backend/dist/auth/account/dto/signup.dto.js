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
exports.SignupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_dto_1 = require("../../../users/dto/user.dto");
const ValidationOptions = {};
class SignupDto extends user_dto_1.CreateUserDto {
}
exports.SignupDto = SignupDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'username',
        type: String,
        example: 'username',
        required: true
    }),
    (0, class_validator_1.IsString)(ValidationOptions),
    (0, class_validator_1.IsNotEmpty)(ValidationOptions),
    __metadata("design:type", String)
], SignupDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'FullName',
        type: String,
        example: 'FullName',
        required: true
    }),
    (0, class_validator_1.IsString)(ValidationOptions),
    (0, class_validator_1.IsNotEmpty)(ValidationOptions),
    __metadata("design:type", String)
], SignupDto.prototype, "FullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'email',
        type: String,
        example: 'email',
        required: true
    }),
    (0, class_validator_1.IsEmail)({}, ValidationOptions),
    (0, class_validator_1.IsNotEmpty)(ValidationOptions),
    __metadata("design:type", String)
], SignupDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UserAvatar',
        type: String,
        example: 'UserAvatar',
        required: true
    }),
    (0, class_validator_1.IsString)(ValidationOptions),
    (0, class_validator_1.IsNotEmpty)(ValidationOptions),
    __metadata("design:type", String)
], SignupDto.prototype, "UserAvatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'password',
        type: String,
        example: 'password',
        required: true
    }),
    (0, class_validator_1.IsString)(ValidationOptions),
    (0, class_validator_1.IsNotEmpty)(ValidationOptions),
    __metadata("design:type", String)
], SignupDto.prototype, "password", void 0);
//# sourceMappingURL=signup.dto.js.map