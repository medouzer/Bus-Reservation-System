import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { SignupDto } from "src/auth/account/dto/signup.dto";
import { CaslAbilityGuard } from "src/guards/casl-ability.guard";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { CheckAbilities } from "src/decorators/abilities.decorator";

@ApiTags('admin/users')
@Controller("admin/users")
@UseGuards(JwtAuthGuard, CaslAbilityGuard)
export class AdminUsersController extends AdminController {
    @Get()
    @CheckAbilities({ action: 'read', subject: 'User' })
    async GetAllUsers() {
        return await this.userServices.findAll();
    }

    @Post("create/driver")
    @ApiBody({ type: SignupDto, required: true })
    @CheckAbilities({ action: 'manage', subject: 'all' })
    async CreateDriver(@Body() bodyData: SignupDto) {
        bodyData.role = "driver";
        return await this.userServices.createAccount(bodyData);
    }
}