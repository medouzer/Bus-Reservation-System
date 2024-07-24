import { Ability } from '@casl/ability';
import { Roles } from 'src/constant';
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete' | 'selfRead';
export type Subjects = 'all' | 'User' | 'Bus' | 'BusTime' | 'Station' | 'UserReservation';
export type AppAbility = Ability<[Actions, Subjects]>;
export declare class AbilityFactory {
    defineAbility(role: Roles, user_id: string): AppAbility;
}
