import { EUserRole } from "./user-role.interface";

export interface IUser {
    id: number;
    fullname?: string;
    telegram_user_id: number;
    contact: number;
    role: EUserRole;
    signed_time: Date;
}