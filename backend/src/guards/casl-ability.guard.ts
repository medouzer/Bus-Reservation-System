import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AbilityFactory, AppAbility } from 'src/Casl/ability.factory';
import { CHECK_ABILITY } from 'src/decorators/abilities.decorator';
import { ForbiddenError } from '@casl/ability';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CaslAbilityGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private abilityFactory: AbilityFactory,
        private jwtService: JwtService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { user } = context.switchToHttp().getRequest();
        console.log("User : > ", user);
        const ability = this.abilityFactory.defineAbility(user.role, user.id);
        const rules = this.reflector.get(CHECK_ABILITY, context.getHandler()) || [];
        try {
            rules.forEach((rule : any) => ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject));
            return true;
        } catch (error) {
            return false;
        }
    }
}
