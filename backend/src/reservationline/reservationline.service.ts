import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReservationLine, ReservationLineDocument } from 'src/schemas/reservationLine.schema';
import { CreateReservationLineDto } from './reservationline.controller';

@Injectable()
export class ReservationlineService {
    constructor(
        @InjectModel(ReservationLine.name) private reservationLineDocument: Model<ReservationLineDocument>,
    ) { }

    async gettimeoftoday(): Promise<any> {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        return date;
    }

    async createReservationLine(data: CreateReservationLineDto): Promise<ReservationLine> {
        data.date = await this.gettimeoftoday();
        return await new this.reservationLineDocument(data).save();
    }

    async reservationUpdate(data: CreateReservationLineDto) {
        const reservation = await this.reservationLineDocument.findOne(
            { busTimeId: data.busTimeId, date: data.date }
        );
        if (!reservation) {
            return await this.createReservationLine(data);
        }
        reservation.seats += 1;
        return await reservation.save();
    }
}
