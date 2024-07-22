import { ConsoleLogger, Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusTime, BusTimeDocument } from 'src/schemas/busTime.schema';
import * as moment from 'moment-timezone';
import { ReservationEndTime, ReservationStartTime } from 'src/constant';
import { bustimeDtoResponse } from './dto/bus-time.dto';
import { UsersService } from 'src/users/users.service';
import { UserInfoDto } from 'src/users/dto/user.info.dto';
import { UserReservationService } from 'src/user-reservation/user-reservation.service';

@Injectable()
export class BusTimeService {
    constructor(
        @InjectModel(BusTime.name) private busTimeModel: Model<BusTimeDocument>,
        @Inject(forwardRef( () => UsersService)) private readonly userServices : UsersService,
        @Inject(forwardRef( () => UserReservationService)) private readonly userReservationService : UserReservationService,
    ) { }

    convertTime(time: string) {
        return time.split(':').map(Number);
    }

    async create(time: string): Promise<BusTime> {
        const DataTime = this.convertTime(time);
        const createdTime = new this.busTimeModel({ time: { hours: DataTime[0], minutes: DataTime[1] } });
        return createdTime.save();
    }

    async findAll(): Promise<BusTime[]> {
        const workingHours = await this.busTimeModel.find().exec();
        return workingHours;
    }

    async findOneById(id: string): Promise<BusTime> {
        const workingHour = await this.busTimeModel.findById(id).exec();
        return workingHour;
    }

    async getCurrentTime(): Promise<Date>
    {
        const moroccoMoment = moment.tz('Africa/Casablanca');
        moroccoMoment.add(1, 'hours');
        const moroccoDateString = moroccoMoment.format('YYYY-MM-DDTHH:mm:ss');
        const currentTime = new Date(moroccoDateString);
        return currentTime;
    }

    async findCurrentTime(userInfo : UserInfoDto): Promise<bustimeDtoResponse[]> {
        let Respons: bustimeDtoResponse[] = [];

        const currentTime = await this.getCurrentTime();
        const currentUser = await this.userServices.findOneByid(userInfo.userId);
        if (!currentUser) {
            return null;
        }

        const workingHours = await this.busTimeModel.find().exec();
        let UserReservation : any = null;

        if (currentUser.UserCurrentReservationId) {
            console.log("currentUser.UserCurrentReservationId : ", currentUser.UserCurrentReservationId);
            UserReservation = await this.userReservationService.findOnById(currentUser.UserCurrentReservationId as any);
            console.log(UserReservation)
        }

        const timeObject = new Date();
        workingHours.forEach((element : any) => {
            timeObject.setHours(element.time.hours);
            timeObject.setMinutes(element.time.minutes);

            if (timeObject.getHours() == currentTime.getHours())
            {
                if (currentTime.getMinutes() > ReservationStartTime && currentTime.getMinutes() < ReservationEndTime) {
                    const Reserved : boolean = UserReservation != null && String(element._id) === String(UserReservation.BusTimeId._id);
                    Respons.push({
                        _id: element._id,
                        isCurrent: true,
                        isOpen: true,
                        isReserved: Reserved,
                        Hours: element.time.hours,
                        Minutes: element.time.minutes,
                        FullTime: `${element.time.hours}:${element.time.minutes}`
                    });
                } else {
                    Respons.push({
                        _id: element._id,
                        isCurrent: true,
                        isOpen: false,
                        isReserved: false,
                        Hours: element.time.hours,
                        Minutes: element.time.minutes,
                        FullTime: `${element.time.hours}:${element.time.minutes}`
                    });
                }
            } else {
                Respons.push({
                    _id: element._id,
                    isCurrent: false,
                    isOpen: false,
                    isReserved: false,
                    Hours: element.time.hours,
                    Minutes: element.time.minutes,
                    FullTime: `${element.time.hours}:${element.time.minutes}`
                });
            }
        });

        let startIndex = Respons.findIndex((element) => {
            return element.Hours == ((currentTime.getHours() != 2) ? currentTime.getHours() : (currentTime.getHours() + 1));
        });

        if (startIndex == -1) {
            return Respons;
        }
        const HoursOfBus = Respons.slice(startIndex);
        return HoursOfBus;
    }

    async getNextBusTime(userInfo : UserInfoDto): Promise<bustimeDtoResponse> {
        const HoursOfBus = await this.findCurrentTime(userInfo);
        return HoursOfBus[0];
    }
}
