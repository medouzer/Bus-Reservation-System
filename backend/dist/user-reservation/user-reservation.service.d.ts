import { Model, Types } from 'mongoose';
import { UserReservation, UserReservationDocument } from 'src/schemas/userReservation.schema';
import { UserReservationDto } from './dto/user.reservation.dto';
import { UsersService } from 'src/users/users.service';
import { BusTimeService } from 'src/bus-time/bus-time.service';
import { UserInfoDto } from 'src/users/dto/user.info.dto';
import { ReservationlineService } from 'src/reservationline/reservationline.service';
export declare class UserReservationService {
    private userReservationModel;
    private readonly usersService;
    private readonly busTimeService;
    private readonly reservationlineService;
    constructor(userReservationModel: Model<UserReservationDocument>, usersService: UsersService, busTimeService: BusTimeService, reservationlineService: ReservationlineService);
    createReservation(data: UserReservationDto, userInfo: UserInfoDto): Promise<UserReservation> | null;
    findAllReservation(): Promise<any[]>;
    findOnById(reservationId: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, UserReservationDocument> & UserReservation & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
    cancelReservation(userInfo: UserInfoDto): Promise<import("mongoose").Document<unknown, {}, UserReservationDocument> & UserReservation & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
}
