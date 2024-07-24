import { Document, Types } from 'mongoose';
export type BusDocument = Bus & Document;
export declare class Bus {
    busNumber: string;
    busName: string;
    stations: {
        type: Types.ObjectId;
        ref: 'Station';
    }[];
    Capacity: number;
    busStatus: boolean;
}
declare const BusSchema: import("mongoose").Schema<Bus, import("mongoose").Model<Bus, any, any, any, Document<unknown, any, Bus> & Bus & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Bus, Document<unknown, {}, import("mongoose").FlatRecord<Bus>> & import("mongoose").FlatRecord<Bus> & {
    _id: Types.ObjectId;
}>;
export { BusSchema };
