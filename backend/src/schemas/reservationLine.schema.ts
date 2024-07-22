import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ReservationLineDocument = ReservationLine & Document;

@Schema()
export class ReservationLine extends Document {
    @Prop({ required: true })
    date: string;

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'BusTime' })
    busTime: { type: MongooseSchema.Types.ObjectId, ref: 'BusTime'}

    @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'UserReservation' })
    userReservation: { type: MongooseSchema.Types.ObjectId, ref: 'UserReservation' }

    @Prop({ required: false, default: 1})
    seats: number;
}

const ReservationLineSchema = SchemaFactory.createForClass(ReservationLine);

export { ReservationLineSchema };