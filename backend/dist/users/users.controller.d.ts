import { UsersService } from './users.service';
import { User, UserDocument } from 'src/schemas/users.schema';
import { UserInfoDto } from './dto/user.info.dto';
export declare class UsersController {
    private readonly UserService;
    constructor(UserService: UsersService);
    findCurrentUser(userInfo: UserInfoDto): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
}
