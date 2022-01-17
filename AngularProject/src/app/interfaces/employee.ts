
export interface Employee {
    uuid:string;
    name:string;
    surname:string;
    gender:string;
    position:string;
}

export enum Roles {
    NOT_LOGGED = "NOT_LOGGED",
    ROLE_USER = "ROLE_USER",
    ROLE_ADMIN = "ROLE_ADMIN"
}

export interface User {
    id: number,
    username: string;
    email: string;
    roles: Array<Roles>;
    accessToken: string;
    tokenType: string;
}