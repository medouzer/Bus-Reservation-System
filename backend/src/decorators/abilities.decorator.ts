import { SetMetadata } from '@nestjs/common';

export const CHECK_ABILITY = 'check_ability';
export const CheckAbilities = (...requirements: { action: string; subject: string }[]) => SetMetadata(CHECK_ABILITY, requirements);
