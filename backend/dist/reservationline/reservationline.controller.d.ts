import { ReservationlineService } from './reservationline.service';
export declare class CreateReservationLineDto {
    date: string;
    reservationId: string;
    busTimeId: string;
}
export declare class ReservationlineController {
    private readonly reservationlineService;
    constructor(reservationlineService: ReservationlineService);
}
