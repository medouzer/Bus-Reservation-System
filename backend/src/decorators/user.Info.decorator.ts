import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

const extractJWT = (req: any): string | undefined => {
    if (req.cookies && 'user_token' in req.cookies) {
        const userToken = req.cookies.user_token;
        if (typeof userToken === 'string' && userToken.length > 0) {
            return userToken;
        }
    }
    return null;
}

export const ConnectedUser = createParamDecorator(
    (property: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const configService = new ConfigService();

        const token = extractJWT(request);
        if (token) {
            try {
                const jwtService = new JwtService({
                    secret: configService.get<string>('JWT_SECRET')
                });
                const UserTokenInfo = jwtService.verify(token);
                return {
                    userName: UserTokenInfo.userName,
                    userId: UserTokenInfo.userId
                };
            } catch (err) {
                return null;
            }
        }
        return null;
    },
);