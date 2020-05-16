import {User} from "../models/User";
import {IRepository} from "./api/IRepository";
import {IResolvers} from "./api/IResolvers";

export class Resolvers implements IResolvers {

    private repository: IRepository

    constructor(repository: IRepository) {
        this.repository = repository
    }

    public getUserResolver = (obj, args, context, info): User => {
        let id = obj.id;
        return this.repository.getUserByID(id)
    }
}
