import { Model } from 'mongoose';
import { BusTime, BusTimeDocument } from 'src/schemas/busTime.schema';
import { bustimeDtoResponse } from './dto/bus-time.dto';
import { UsersService } from 'src/users/users.service';
import { UserInfoDto } from 'src/users/dto/user.info.dto';
import { UserReservationService } from 'src/user-reservation/user-reservation.service';
export declare class BusTimeService {
    private busTimeModel;
    private readonly userServices;
    private readonly userReservationService;
    constructor(busTimeModel: Model<BusTimeDocument>, userServices: UsersService, userReservationService: UserReservationService);
    convertTime(time: string): number[];
    create(time: string): Promise<BusTime>;
    findAll(): Promise<BusTime[]>;
    findOneById(id: string): Promise<BusTime>;
    getCurrentTime(): Promise<Date>;
    findCurrentTime(userInfo: UserInfoDto): Promise<bustimeDtoResponse[]>;
    getNextBusTime(userInfo: UserInfoDto): Promise<bustimeDtoResponse>;
}
