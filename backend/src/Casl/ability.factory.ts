import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Roles } from 'src/constant';

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete' | 'selfRead';

export type Subjects = 'all' | 'User' | 'Bus' | 'BusTime' | 'Station' | 'UserReservation';

export type AppAbility = Ability<[Actions, Subjects]>;

@Injectable()
export class AbilityFactory {
    defineAbility(role: Roles, user_id: string): AppAbility {
        const { can, cannot, build } = new AbilityBuilder<Ability<[Actions, Subjects]>>(Ability as AbilityClass<AppAbility>);

        if (role === Roles.Admin) {
            can('manage', 'all');
        } else if (role === Roles.Driver) {
            can('read', 'all');
            can(['read', 'update'], 'Bus');
        } else if (role === Roles.Student) {
            can('read', ['Bus', 'BusTime', 'Station']);
            can('manage', 'UserReservation');
            can('selfRead', 'User');
        }

        return build({
            detectSubjectType: (item: any) => item.constructor as ExtractSubjectType<Subjects>,
        });
    }
}
