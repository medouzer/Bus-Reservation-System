import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/users.schema";
import { CreateUserDto } from "./dto/user.dto";
import { UserInfoDto } from "./dto/user.info.dto";
import { SigninDto } from "src/auth/account/dto/signin.dto";
export declare class UsersService {
    private UserModel;
    constructor(UserModel: Model<UserDocument>);
    private sanitizeUser;
    private hashPassword;
    createAccount(userInfo: CreateUserDto): Promise<User>;
    login(userInfo: SigninDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOneByid(userId: string): Promise<User>;
    getCurrentConnectedUser(userInfo: UserInfoDto): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    userConnection(userInfo: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    updateCurrentReservation(userId: string, reservationId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    updateAllReservations(): Promise<import("mongoose").UpdateWriteOpResult>;
}
