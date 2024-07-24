import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AbilityFactory } from 'src/Casl/ability.factory';
import { JwtService } from '@nestjs/jwt';
export declare class CaslAbilityGuard implements CanActivate {
    private reflector;
    private abilityFactory;
    private jwtService;
    constructor(reflector: Reflector, abilityFactory: AbilityFactory, jwtService: JwtService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
