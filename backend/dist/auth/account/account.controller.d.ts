import { AccountService } from './account.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
export declare class AccountController {
    private readonly AccountService;
    constructor(AccountService: AccountService);
    createAccount(bodyData: SignupDto): Promise<import("../../schemas/users.schema").User>;
    login(bodyData: SigninDto, res: any): Promise<void>;
    logout(res: any): Promise<void>;
}
