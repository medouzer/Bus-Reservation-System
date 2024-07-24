import { UsersService } from 'src/users/users.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AccountService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    private generateJwt;
    createAccount(userInfos: SignupDto): Promise<import("../../schemas/users.schema").User>;
    login(userInfos: SigninDto): Promise<string>;
}
