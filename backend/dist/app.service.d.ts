import { UsersService } from "./users/users.service";
export declare class appService {
    private readonly userService;
    constructor(userService: UsersService);
    handleCron(): Promise<void>;
}
