import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('v1');

    const options = new DocumentBuilder()
        .setTitle('Bus Management API')
        .setVersion('1.0')
        .addServer(
            `http://${process.env.HOST || '0.0.0.0'}:${process.env.PORT || 3000}`,
            'Local environment'
        )
        .addTag('Bus Management API')
        .addCookieAuth('user_token')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    app.use(cookieParser());
    app.enableCors({
        origin: true,
        credentials: true,
    });

    app.useGlobalPipes(new ValidationPipe());

    await app.listen(
        process.env.PORT || 3000,
        () => {
            console.log(`Server is running on http://${process.env.HOST || '0.0.0.0'}:${process.env.PORT || 3000}`);
        }
    )
}

bootstrap();
