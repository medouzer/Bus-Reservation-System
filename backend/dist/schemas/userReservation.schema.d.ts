import { Document, Types } from 'mongoose';
export type UserReservationDocument = UserReservation & Document;
export declare class UserReservation {
    UserId: {
        type: Types.ObjectId;
        ref: 'User';
    };
    StationId: {
        type: Types.ObjectId;
        ref: 'Station';
    };
    BusTimeId: {
        type: Types.ObjectId;
        ref: 'BusTime';
    };
}
declare const UserReservationSchema: import("mongoose").Schema<UserReservation, import("mongoose").Model<UserReservation, any, any, any, Document<unknown, any, UserReservation> & UserReservation & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserReservation, Document<unknown, {}, import("mongoose").FlatRecord<UserReservation>> & import("mongoose").FlatRecord<UserReservation> & {
    _id: Types.ObjectId;
}>;
export { UserReservationSchema };
