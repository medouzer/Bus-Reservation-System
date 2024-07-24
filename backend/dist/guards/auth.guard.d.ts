import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
declare class NotLoggedInUser implements CanActivate {
    private readonly jwtService;
    private readonly configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    static extractJWT(req: Request): string | undefined;
}
declare class AlreadyLoggedInGuard implements CanActivate {
    private readonly jwtService;
    private readonly configService;
    private readonly userService;
    constructor(jwtService: JwtService, configService: ConfigService, userService: UsersService);
    canActivate(context: ExecutionContext): Promise<any>;
}
export { AlreadyLoggedInGuard, NotLoggedInUser };
