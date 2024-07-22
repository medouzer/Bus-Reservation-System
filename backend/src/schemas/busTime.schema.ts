import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

export type BusTimeDocument = BusTime & Document;

interface Time {
    hours: number;
    minutes: number;
}

const TimeSchema = new MongooseSchema({
    hours: { type: Number, required: true },
    minutes: { type: Number, required: true },
});

@Schema()
export class BusTime extends Document
{
    @Prop({ required: true, type: TimeSchema })
    time: Time;
}

const BusTimeSchema = SchemaFactory.createForClass(BusTime);

export { BusTimeSchema };