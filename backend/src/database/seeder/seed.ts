import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder.module';
import { SeederService } from './seeder.service';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(SeederModule);
    const seederService = app.get(SeederService);

    await seederService.seedAdmin();
    await app.close();
}

bootstrap()
    .then(() => {
        console.log('Seeding complete!');
        process.exit();
    })
    .catch(error => {
        console.error('Seeding failed!', error);
        process.exit(1);
    });
