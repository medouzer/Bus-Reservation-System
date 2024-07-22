import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../../schemas/users.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SeederService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        private readonly configService: ConfigService
    ) { }

    async seedAdmin() {
        // const adminExists = await this.userModel.findOne({ email: 'admin@example.com' }).exec();
        // if (adminExists) {
        //     console.log('Admin user already exists');
        //     return;
        // }
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash('securepassword', salt);
        // const admin = new this.userModel({
        //     email: 'admin@example.com',
        //     password: hashedPassword,
        //     roles: ['admin'],
        // });
        // await admin.save();

        const adminExists = await this.userModel.findOne({
            username: this.configService.get<string>("ADMIN_USER")
        }).exec()

        if (adminExists) {
            console.log('Admin user already exists');
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(
            this.configService.get<string>("ADMIN_PASS"),
            salt
        );

        const admin = new this.userModel({
            username: this.configService.get<string>("ADMIN_USER"),
            FullName: this.configService.get<string>("ADMIN_USER"),
            email: this.configService.get<string>("ADMIN_MAIL"),
            UserAvatar: "test",
            password: hashedPassword,
            role: "admin"
        });

        await admin.save();
        console.log('Admin user created ', admin);
    }
}
