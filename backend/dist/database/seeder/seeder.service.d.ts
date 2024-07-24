import { Model } from 'mongoose';
import { User } from '../../schemas/users.schema';
import { ConfigService } from '@nestjs/config';
export declare class SeederService {
    private readonly userModel;
    private readonly configService;
    constructor(userModel: Model<User>, configService: ConfigService);
    seedAdmin(): Promise<void>;
}
