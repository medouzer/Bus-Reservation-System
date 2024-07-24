"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._CostumCronExpression = void 0;
const schedule_1 = require("@nestjs/schedule");
exports._CostumCronExpression = {
    ...schedule_1.CronExpression,
    EVERY_HOUR_FROM_9PM_TO_6AM_AT_MIN_15: "15 21-23,0-6 * * *"
};
//# sourceMappingURL=cronExpression.constant.js.map