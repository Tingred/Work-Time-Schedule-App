import { ETask } from "./etask";

export interface Employee {
    uuid:string;
    name:string;
    surname:string;
    gender:string;
    position:string;
    tasks:ETask[];
}
