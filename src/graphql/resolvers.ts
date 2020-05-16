class User {
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
    id: string
    name: string
}

export class Resolvers {
    static userResolver = (obj, args, context, info): User => {
        let u1 = new User('123', "Mike");
        let u2 = new User("321", "Pike");
        let id = obj.id;
        if (id == "123") {
            return u1;
        } else if (id == "321") {
            return u2
        }
        return null;
    }
}
