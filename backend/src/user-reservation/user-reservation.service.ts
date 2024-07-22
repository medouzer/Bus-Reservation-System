import { HttpException, HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserReservation, UserReservationDocument } from 'src/schemas/userReservation.schema';
import { UserReservationDto } from './dto/user.reservation.dto';
import { UsersService } from 'src/users/users.service';
import { BusTimeService } from 'src/bus-time/bus-time.service';
import { ReservationStartTime, ReservationEndTime } from 'src/constant';
import { UserInfo } from 'os';
import { UserInfoDto } from 'src/users/dto/user.info.dto';
import { ReservationlineService } from 'src/reservationline/reservationline.service';

@Injectable()
export class UserReservationService {
    constructor(
        @InjectModel(UserReservation.name) private userReservationModel: Model<UserReservationDocument>,
        @Inject(forwardRef(() => UsersService)) private readonly usersService: UsersService,
        @Inject(forwardRef(() => BusTimeService)) private readonly busTimeService: BusTimeService,
        @Inject(forwardRef(() => ReservationlineService)) private readonly reservationlineService: ReservationlineService
    ) { }

    async createReservation(data: UserReservationDto, userInfo: UserInfoDto): Promise<UserReservation> | null {
        try {
            const RequestedTime = await this.busTimeService.findOneById(data.BusTimeId);
            const CurrentUser = await this.usersService.findOneByid(data.UserId);
            const CurrentTime = await this.busTimeService.getCurrentTime();

            console.log('Current user', CurrentUser);

            if (CurrentUser) {
                const CurrentTime = await this.busTimeService.getCurrentTime();
                const getNextBusTime = await this.busTimeService.getNextBusTime(userInfo);

                if ((RequestedTime as any).id != getNextBusTime._id || CurrentTime.getMinutes() < ReservationStartTime) {
                    throw new Error("Bus time is not available");
                }

                if (CurrentTime.getMinutes() > ReservationEndTime || CurrentTime.getHours() != RequestedTime.time.hours) {
                    throw new Error("Bus time is not available");
                }

                if (CurrentUser.UserCurrentReservationId) {
                    throw new Error("User already has a reservation");
                }

                const userReservation = await new this.userReservationModel(data).save();
                await this.usersService.updateCurrentReservation(data.UserId, (userReservation as any)._id);
                return userReservation;
            }
            console.log('User not found');
            return null;
        }
        catch (e) {
            throw new HttpException({
                statusCode: HttpStatus.UNAUTHORIZED,
                message: e.message
            }, HttpStatus.UNAUTHORIZED);
        }
    }

    async findAllReservation(): Promise<any[]> {
        return this.userReservationModel.find().populate('UserId').populate('StationId').populate('BusTimeId').exec();
    }

    async findOnById(reservationId: Types.ObjectId) {
        return await this.userReservationModel.findById(reservationId).populate('UserId').populate('StationId').populate('BusTimeId').exec();
    }

    async cancelReservation(userInfo: UserInfoDto) {
        const CurrentUser = await this.usersService.findOneByid(userInfo.userId);
        if (CurrentUser) {
            if (CurrentUser.UserCurrentReservationId) {
                const reservation = await this.findOnById(CurrentUser.UserCurrentReservationId as any);
                if (reservation) {
                    await this.userReservationModel.deleteOne({ _id: reservation._id });
                    await this.usersService.updateCurrentReservation(userInfo.userId, null);
                    return reservation;
                }
            }
        }
        return null;
    }
}
