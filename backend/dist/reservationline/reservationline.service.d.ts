import { Model } from 'mongoose';
import { ReservationLine, ReservationLineDocument } from 'src/schemas/reservationLine.schema';
import { CreateReservationLineDto } from './reservationline.controller';
export declare class ReservationlineService {
    private reservationLineDocument;
    constructor(reservationLineDocument: Model<ReservationLineDocument>);
    gettimeoftoday(): Promise<any>;
    createReservationLine(data: CreateReservationLineDto): Promise<ReservationLine>;
    reservationUpdate(data: CreateReservationLineDto): Promise<ReservationLine>;
}
