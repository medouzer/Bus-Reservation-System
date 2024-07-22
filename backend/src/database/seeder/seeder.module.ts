import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../schemas/users.schema';
import { SeederService } from './seeder.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env' }),
        
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGO_URI'),
                dbName: 'BusManager',
            }),
            inject: [ConfigService],
        }),

        MongooseModule.forRootAsync({
            useFactory: () => ({
                uri: process.env.MONGO_URI,
                dbName: "BusManager",
            }),
        }),

        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema, collection: 'users' }
        ]),
    ],
    providers: [SeederService],
    exports: [SeederService],
})
export class SeederModule { }
