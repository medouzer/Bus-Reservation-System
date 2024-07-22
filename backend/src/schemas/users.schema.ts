import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    FullName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    UserAvatar: string;

    @Prop({ required: false, default: null })
    password: string;

    @Prop({ required: false, default: "student" })
    role: string;

    @Prop({ required: false, default: {}, type: Object })
    attributes: Record<string, any>;

    @Prop({ required: false, default: null, type: Types.ObjectId, ref: 'UserReservation' })
    UserCurrentReservationId: { type: Types.ObjectId, ref: 'UserReservation' };
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
