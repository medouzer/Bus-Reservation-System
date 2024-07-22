import { CronExpression } from "@nestjs/schedule";

export const    _CostumCronExpression = {
    ...CronExpression,
    EVERY_HOUR_FROM_9PM_TO_6AM_AT_MIN_15: "15 21-23,0-6 * * *"
}