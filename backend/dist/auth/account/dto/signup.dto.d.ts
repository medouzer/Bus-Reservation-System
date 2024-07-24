import { CreateUserDto } from "src/users/dto/user.dto";
export declare class SignupDto extends CreateUserDto {
    username: string;
    FullName: string;
    email: string;
    UserAvatar: string;
    password: string;
    UserCurrentReservationId?: string;
    role?: string;
}
