import { BusTimeService } from './bus-time.service';
import { UserInfoDto } from 'src/users/dto/user.info.dto';
export declare class BusTimeController {
    private readonly busTimeService;
    constructor(busTimeService: BusTimeService);
    findCurrentTime(userInfo: UserInfoDto): Promise<import("./dto/bus-time.dto").bustimeDtoResponse[]>;
}
