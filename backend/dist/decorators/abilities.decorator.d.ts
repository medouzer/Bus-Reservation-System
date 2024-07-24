export declare const CHECK_ABILITY = "check_ability";
export declare const CheckAbilities: (...requirements: {
    action: string;
    subject: string;
}[]) => import("@nestjs/common").CustomDecorator<string>;
