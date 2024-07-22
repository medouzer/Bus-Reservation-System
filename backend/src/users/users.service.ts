import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/users.schema";
import { CreateUserDto } from "./dto/user.dto";
import * as bcrypt from 'bcrypt';
import { UserInfoDto } from "./dto/user.info.dto";
import { SigninDto } from "src/auth/account/dto/signin.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }

    private sanitizeUser(user: any): User {
        const sanitizedUser = user.toObject();
        delete sanitizedUser.password;
        return sanitizedUser;
    }

    private async hashPassword(password: string) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(
            password,
            salt
        );
        return hashedPassword;
    }

    async createAccount(userInfo: CreateUserDto) {
        const user = await this.UserModel.findOne({
            $or: [
                { username: userInfo.username },
                { email: userInfo.email }
            ]
        }).exec();

        if (user) {
            throw new HttpException(
                {
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "Email or Username already Used",
                },
                HttpStatus.UNAUTHORIZED
            );
        }

        (userInfo as any).password = await this.hashPassword((userInfo as any).password);
        userInfo.UserCurrentReservationId = null;
        const createdUser = new this.UserModel(userInfo);
        await createdUser.save();

        return this.sanitizeUser(createdUser);
    }

    async login(userInfo: SigninDto) {
        const user = await this.UserModel.findOne({ username: userInfo.username });
        if (!user || !user.password) {
            throw new HttpException(
                {
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "Invalid credentials",
                },
                HttpStatus.UNAUTHORIZED
            );
        }

        const isPasswordValid = await bcrypt.compare(userInfo.password, user.password);

        if (!isPasswordValid) {
            throw new HttpException(
                {
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "Invalid credentials",
                },
                HttpStatus.UNAUTHORIZED
            );
        }

        return this.sanitizeUser(user);
    }

    async findAll(): Promise<User[]> {
        return this.UserModel.find({}, { username: 1, email: 1 }).exec();
    }

    async findOneByid(userId: string): Promise<User> {
        return this.UserModel.findOne({ _id: userId }).exec();
    }

    async getCurrentConnectedUser(userInfo: UserInfoDto) {
        return this.UserModel.findOne({ _id: userInfo.userId }, {
            username: true,
            FullName: 1,
            email: 1,
            role: 1,
            UserAvatar: 1
        }).exec();
    }

    async userConnection(userInfo: CreateUserDto) {
        if (
            !userInfo.FullName ||
            !userInfo.UserAvatar ||
            !userInfo.email ||
            !userInfo.username
        ) {
            throw new HttpException(
                {
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "User information id required",
                },
                HttpStatus.UNAUTHORIZED
            );
        }
        const user = await this.UserModel.findOne({
            username: userInfo.username,
        }).exec();
        if (user) {
            return user;
        }

        userInfo.UserCurrentReservationId = null;
        const createdUser = new this.UserModel(userInfo);
        return createdUser.save();
    }

    async updateCurrentReservation(userId: string, reservationId: string) {
        const user = await this.UserModel.findOne({ _id: userId }).exec();
        return this.UserModel.updateOne(
            { _id: userId },
            { UserCurrentReservationId: reservationId }
        );
    }

    async updateAllReservations() {
        return await this.UserModel.updateMany(
            {},
            { $set: { UserCurrentReservationId: null } }
        );
    }
}
