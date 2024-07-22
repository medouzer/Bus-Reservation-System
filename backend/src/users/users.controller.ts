import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserDocument } from 'src/schemas/users.schema';
import { ApiTags } from '@nestjs/swagger';
import { AlreadyLoggedInGuard } from 'src/guards/auth.guard';
import { ConnectedUser } from 'src/decorators/user.Info.decorator';
import { UserInfoDto } from './dto/user.info.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { CheckAbilities } from 'src/decorators/abilities.decorator';
import { CaslAbilityGuard } from 'src/guards/casl-ability.guard';

@ApiTags('Users')
@Controller('users')
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
@CheckAbilities({ action: 'selfRead', subject: 'User' })
export class UsersController {
    constructor(private readonly UserService: UsersService) { }
    
    @Get("current")
    async findCurrentUser(@ConnectedUser() userInfo: UserInfoDto) {
        return this.UserService.getCurrentConnectedUser(userInfo);
    }
}