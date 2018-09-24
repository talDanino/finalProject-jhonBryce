import { Data } from "@angular/router";

export class User{ //instead interface
    UserID: number;
    FullName: string;
    ID: string;
    UserName: string;
    BirthDate: Data;
    Gender: string;
    Email: string;
    Password: string;
    UserRole: number;
}