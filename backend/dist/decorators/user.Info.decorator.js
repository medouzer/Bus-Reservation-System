"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedUser = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const extractJWT = (req) => {
    if (req.cookies && 'user_token' in req.cookies) {
        const userToken = req.cookies.user_token;
        if (typeof userToken === 'string' && userToken.length > 0) {
            return userToken;
        }
    }
    return null;
};
exports.ConnectedUser = (0, common_1.createParamDecorator)((property, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const configService = new config_1.ConfigService();
    const token = extractJWT(request);
    if (token) {
        try {
            const jwtService = new jwt_1.JwtService({
                secret: configService.get('JWT_SECRET')
            });
            const UserTokenInfo = jwtService.verify(token);
            return {
                userName: UserTokenInfo.userName,
                userId: UserTokenInfo.userId
            };
        }
        catch (err) {
            return null;
        }
    }
    return null;
});
//# sourceMappingURL=user.Info.decorator.js.map