import { Injectable, CanActivate, ExecutionContext, Inject, forwardRef, } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';

@Injectable()
class NotLoggedInUser implements CanActivate {
    constructor(
        @Inject(forwardRef(() => JwtService)) private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const respose = context.switchToHttp().getResponse<Response>();
        const token = NotLoggedInUser.extractJWT(request);

        console.log("Token: ", token);

        if (token) {
            console.log("Already Logged In");
            try {
                this.jwtService.verify(token, { secret: this.configService.get<string>("JWT_SECRET") });
                respose.redirect(`http://localhost:3000/home`);
                return false;
            } catch (err) {
                console.log("Not Logged In");
                return true;
            }
        }
        return true;
    }

    static extractJWT(req: Request): string | undefined {
        console.log("Cookies: ", req.cookies);
        if (req.cookies && 'user_token' in req.cookies) {
            const userToken = req.cookies.user_token;
            if (typeof userToken === 'string' && userToken.length > 0) {
                return userToken;
            }
        }
        return null;
    }
}

@Injectable()
class AlreadyLoggedInGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly userService: UsersService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<any> {
        const response = context.switchToHttp().getResponse<Response>();
        const request = context.switchToHttp().getRequest();
        const token = NotLoggedInUser.extractJWT(request);

        if (token) {
            try {
                console.log("Already Logged In");
                const JwtInfo = this.jwtService.decode(token);
                const user: any = await this.userService.findOneByid(JwtInfo.userId);
                const { password, ...result } = user.toObject()
                request.user = result;

                return true;
            } catch (err) {
                console.log("Not Logged In");
                return false;
            }
        }
    }
}

export { AlreadyLoggedInGuard, NotLoggedInUser }