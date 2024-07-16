import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})
export class Bus extends Document {
    @Prop({ required: true, unique: true })
    busNumber: string;

    @Prop({ required: true })
    capacity: number;

    @Prop({ type: [String], required: true })
    schedule: string[];
}

export const BusSchema = SchemaFactory.createForClass(Bus);
