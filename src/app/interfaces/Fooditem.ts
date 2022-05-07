import { Lunchbox } from "./lunchbox";

export interface Fooditem{
    id: number;
    fname: string;
    fqty: string;
    fremark: string;
    status: number;
    ngoemail: string;
    lunchbox: Lunchbox;
}