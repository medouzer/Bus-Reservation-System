import { Document, Types } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    username: string;
    FullName: string;
    email: string;
    UserAvatar: string;
    password: string;
    role: string;
    attributes: Record<string, any>;
    UserCurrentReservationId: {
        type: Types.ObjectId;
        ref: 'UserReservation';
    };
}
declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: Types.ObjectId;
}>;
export { UserSchema };
