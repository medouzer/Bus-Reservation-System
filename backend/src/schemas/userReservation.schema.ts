import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types} from 'mongoose';

export type UserReservationDocument = UserReservation & Document;

@Schema()
export class UserReservation {
    @Prop({type: Types.ObjectId, ref: 'User'})
    UserId: { type: Types.ObjectId, ref: 'User' };

    // @Prop({type: Types.ObjectId, ref: 'Bus'})
    // BusId: { type: Types.ObjectId, ref: 'Bus' };

    @Prop({type: Types.ObjectId, ref: 'Station'})
    StationId: { type: Types.ObjectId, ref: 'Station' };

    @Prop({type: Types.ObjectId, ref: 'BusTime'})
    BusTimeId: { type: Types.ObjectId, ref: 'BusTime' };
};

const UserReservationSchema = SchemaFactory.createForClass(UserReservation);

export { UserReservationSchema };