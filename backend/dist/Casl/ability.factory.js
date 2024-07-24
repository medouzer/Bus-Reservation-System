"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityFactory = void 0;
const ability_1 = require("@casl/ability");
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant");
let AbilityFactory = class AbilityFactory {
    defineAbility(role, user_id) {
        const { can, cannot, build } = new ability_1.AbilityBuilder(ability_1.Ability);
        if (role === constant_1.Roles.Admin) {
            can('manage', 'all');
        }
        else if (role === constant_1.Roles.Driver) {
            can('read', 'all');
            can(['read', 'update'], 'Bus');
        }
        else if (role === constant_1.Roles.Student) {
            can('read', ['Bus', 'BusTime', 'Station']);
            can('manage', 'UserReservation');
            can('selfRead', 'User');
        }
        return build({
            detectSubjectType: (item) => item.constructor,
        });
    }
};
exports.AbilityFactory = AbilityFactory;
exports.AbilityFactory = AbilityFactory = __decorate([
    (0, common_1.Injectable)()
], AbilityFactory);
//# sourceMappingURL=ability.factory.js.map