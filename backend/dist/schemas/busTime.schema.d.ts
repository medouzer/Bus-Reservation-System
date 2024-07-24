import { Document, Schema as MongooseSchema } from 'mongoose';
export type BusTimeDocument = BusTime & Document;
interface Time {
    hours: number;
    minutes: number;
}
export declare class BusTime extends Document {
    time: Time;
}
declare const BusTimeSchema: MongooseSchema<BusTime, import("mongoose").Model<BusTime, any, any, any, Document<unknown, any, BusTime> & BusTime & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BusTime, Document<unknown, {}, import("mongoose").FlatRecord<BusTime>> & import("mongoose").FlatRecord<BusTime> & Required<{
    _id: unknown;
}>>;
export { BusTimeSchema };
