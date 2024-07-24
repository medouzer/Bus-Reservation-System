"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('v1');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Bus Management API')
        .setVersion('1.0')
        .addServer(`http://${process.env.HOST || '0.0.0.0'}:${process.env.PORT || 3000}`, 'Local environment')
        .addTag('Bus Management API')
        .addCookieAuth('user_token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(cookieParser());
    app.enableCors({
        origin: true,
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on http://${process.env.HOST || '0.0.0.0'}:${process.env.PORT || 3000}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map