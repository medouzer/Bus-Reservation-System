import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class User {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;  // Added email field

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, enum: ['student', 'driver', 'admin'], default: 'student'})
    role: string; // 'student', 'admin', 'driver'
}

export const UserSchema = SchemaFactory.createForClass(User);
