import { AdminController } from "./admin.controller";
import { SignupDto } from "src/auth/account/dto/signup.dto";
export declare class AdminUsersController extends AdminController {
    GetAllUsers(): Promise<import("../../schemas/users.schema").User[]>;
    CreateDriver(bodyData: SignupDto): Promise<import("../../schemas/users.schema").User>;
}
