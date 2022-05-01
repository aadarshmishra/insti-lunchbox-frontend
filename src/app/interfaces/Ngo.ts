import { User } from "./User";

export interface Ngo {
    id: number;
    ngoId: string;
    name: string;
    address: string;
    contact: string;
    email: string;
    user: User;
}