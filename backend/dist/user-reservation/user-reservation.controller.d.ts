import { UserReservationService } from './user-reservation.service';
import { UserReservationDto } from './dto/user.reservation.dto';
import { UserInfoDto } from 'src/users/dto/user.info.dto';
export declare class UserReservationController {
    private readonly userReservationService;
    constructor(userReservationService: UserReservationService);
    create(data: UserReservationDto, userInfo: any): Promise<import("../schemas/userReservation.schema").UserReservation>;
    cancelReservation(userInfo: UserInfoDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/userReservation.schema").UserReservationDocument> & import("../schemas/userReservation.schema").UserReservation & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }>>;
}
