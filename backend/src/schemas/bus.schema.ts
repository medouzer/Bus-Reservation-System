import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types} from 'mongoose';
import { Station } from './station.schema';

export type BusDocument = Bus & Document;

@Schema()
export class Bus {
    @Prop({ required: true, unique: true })
    busNumber: string;

    @Prop({ required: true })
    busName: string;

    @Prop({type: Types.ObjectId, ref: 'Station'})
    stations: { type: Types.ObjectId, ref: 'Station' }[];

    @Prop({ required: true })
    Capacity: number;

    @Prop({ default: true })
    busStatus: boolean;
}

const BusSchema = SchemaFactory.createForClass(Bus);


export { BusSchema };