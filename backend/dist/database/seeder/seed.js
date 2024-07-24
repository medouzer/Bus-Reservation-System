"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const seeder_module_1 = require("./seeder.module");
const seeder_service_1 = require("./seeder.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(seeder_module_1.SeederModule);
    const seederService = app.get(seeder_service_1.SeederService);
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
//# sourceMappingURL=seed.js.map