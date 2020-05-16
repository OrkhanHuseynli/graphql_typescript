import {User} from "../../models/User";

export interface IResolvers {
    getUserResolver(obj, args, context, info): User
}