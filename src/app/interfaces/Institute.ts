import { User } from "./User";

export interface Institute {
    id: number;
    name: string;
    address: string;
    contact: string;
    email: string;
    status: number;
    user: User;
}