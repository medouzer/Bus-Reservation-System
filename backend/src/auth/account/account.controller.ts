import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { SignupDto } from './dto/signup.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { SigninDto } from './dto/signin.dto';
import { NotLoggedInUser } from 'src/guards/auth.guard';

@ApiTags('Auth/account')
@Controller('account')
export class AccountController {
    constructor(private readonly AccountService: AccountService) { }

    @UseGuards(NotLoggedInUser)
    @Post("create")
    @ApiBody({ type: SignupDto, required: true })
    async createAccount(@Body() bodyData: SignupDto) {
        return await this.AccountService.createAccount(bodyData);
    }

    @UseGuards(NotLoggedInUser)
    @Post("login")
    @ApiBody({ type: SigninDto, required: true })
    async login(@Body() bodyData: SigninDto, @Res() res: any) {
        const jwtToken : string = await this.AccountService.login(bodyData);
        res.cookie('user_token', jwtToken, { httpOnly: true });
        res.send({ jwt: jwtToken });
    }

    @Get("logout")
    async logout(@Res() res: any) {
        res.clearCookie('user_token');
        res.send('Logout successfully');
    }
}
