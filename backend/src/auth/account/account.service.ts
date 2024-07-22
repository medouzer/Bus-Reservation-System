import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { StationService } from 'src/station/station.service';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from './dto/signup.dto';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccountService {
    constructor(
        @Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService,
        @Inject(forwardRef(() => JwtService)) private readonly jwtService: JwtService
    ) { }

    private async generateJwt(payload: any) {
        return await this.jwtService.sign(payload);
    }
    
    async createAccount(userInfos: SignupDto) {
        userInfos.role = "student";
        const user = await this.usersService.createAccount(userInfos as CreateUserDto)
        return user;
    }

    async login(userInfos: SigninDto) {
        const user: any = await this.usersService.login(userInfos);
        const jwt: string = await this.generateJwt({
            userName: user.username,
            userId: user._id
        });
        return jwt;
    }
}
