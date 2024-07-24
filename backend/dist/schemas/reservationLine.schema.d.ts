import { Document, Schema as MongooseSchema } from 'mongoose';
export type ReservationLineDocument = ReservationLine & Document;
export declare class ReservationLine extends Document {
    date: string;
    busTime: {
        type: MongooseSchema.Types.ObjectId;
        ref: 'BusTime';
    };
    userReservation: {
        type: MongooseSchema.Types.ObjectId;
        ref: 'UserReservation';
    };
    seats: number;
}
declare const ReservationLineSchema: MongooseSchema<ReservationLine, import("mongoose").Model<ReservationLine, any, any, any, Document<unknown, any, ReservationLine> & ReservationLine & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ReservationLine, Document<unknown, {}, import("mongoose").FlatRecord<ReservationLine>> & import("mongoose").FlatRecord<ReservationLine> & Required<{
    _id: unknown;
}>>;
export { ReservationLineSchema };
