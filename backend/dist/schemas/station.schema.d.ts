import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type StationDocument = Station & Document;
export declare class Station {
    stationName: string;
    stationStatus: boolean;
}
declare const StationSchema: mongoose.Schema<Station, mongoose.Model<Station, any, any, any, Document<unknown, any, Station> & Station & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Station, Document<unknown, {}, mongoose.FlatRecord<Station>> & mongoose.FlatRecord<Station> & {
    _id: mongoose.Types.ObjectId;
}>;
export { StationSchema };
