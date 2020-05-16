import {User} from "../../models/User";

export interface IRepository {
    getUserByID(id: string):User
}