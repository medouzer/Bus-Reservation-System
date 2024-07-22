import { Injectable, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { AbilityBuilder, AbilityClass, ExtractSubjectType, PureAbility } from '@casl/ability';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UsersService,
    ) {
        super();
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const canActivate = await super.canActivate(context);
        if (canActivate) {
            const request = context.switchToHttp().getRequest();
            const user = request.user;
            request.user = await this.userService.findOneByid(user.userId)
            console.log("Can Activate : > ", request.user);
        }
        return canActivate as boolean;
    }

    handleRequest(err: any, user: any, info: any) {
        if (err || !user) {
            console.log("User : > : ", user);
            throw err || new ForbiddenException("You don't have permission to access this resource");
        }
        return user;
    }
}