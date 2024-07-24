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
exports.CaslAbilityGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const ability_factory_1 = require("../Casl/ability.factory");
const abilities_decorator_1 = require("../decorators/abilities.decorator");
const ability_1 = require("@casl/ability");
const jwt_1 = require("@nestjs/jwt");
let CaslAbilityGuard = class CaslAbilityGuard {
    constructor(reflector, abilityFactory, jwtService) {
        this.reflector = reflector;
        this.abilityFactory = abilityFactory;
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const { user } = context.switchToHttp().getRequest();
        console.log("User : > ", user);
        const ability = this.abilityFactory.defineAbility(user.role, user.id);
        const rules = this.reflector.get(abilities_decorator_1.CHECK_ABILITY, context.getHandler()) || [];
        try {
            rules.forEach((rule) => ability_1.ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject));
            return true;
        }
        catch (error) {
            return false;
        }
    }
};
exports.CaslAbilityGuard = CaslAbilityGuard;
exports.CaslAbilityGuard = CaslAbilityGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        ability_factory_1.AbilityFactory,
        jwt_1.JwtService])
], CaslAbilityGuard);
//# sourceMappingURL=casl-ability.guard.js.map