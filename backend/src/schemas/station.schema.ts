import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type StationDocument = Station & Document;

@Schema()
export class Station {
    @Prop({ required: true })
    stationName: string;

    @Prop({ default: true })
    stationStatus: boolean;
}

const StationSchema = SchemaFactory.createForClass(Station);

// walo not working yet (delete station from bus when station is deleted)

// StationSchema.pre('findOneAndDelete', async function (next) {
//     try {
//         const doc = await this.model.findOne(this.getQuery());
//         if (doc) {
//             const BusModel = mongoose.connection.model('Bus');
//             await BusModel.updateMany(
//                 { stations: doc._id },
//                 { $pull: { stations: doc._id } }
//             );
//         }
//         next();
//     } catch (err) {
//         next(err);
//     }
// });

export { StationSchema };