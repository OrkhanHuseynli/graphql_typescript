import {IRepository} from "./api/IRepository";
import {User} from "../models/User";

export class Repository implements IRepository{
    getUserByID(id: string): User {
        let u1 = new User('123', "Mike");
        let u2 = new User("321", "Pike");
        if (id == "123") {
            return u1;
        } else if (id == "321") {
            return u2
        }
    }

 }