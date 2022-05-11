import { Lunchbox } from "../interfaces/Lunchbox";

export interface Fooditem{
    id: number;
    fname: string;
    fqty: string;
    fremark: string;
    status: number;
    ngoemail: string;
    ngoname: string;
    confirm: boolean;
    lunchbox: Lunchbox;
}