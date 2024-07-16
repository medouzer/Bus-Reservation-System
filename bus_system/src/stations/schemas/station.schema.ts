import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Bus } from '../../buses/schemas/bus.schema';
import { Types } from 'mongoose';


@Schema({
    timestamps: true
})
export class Station {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Bus' }] })
    buses: Bus[];
}

export const StationSchema = SchemaFactory.createForClass(Station);
