// The root provides a resolver function for each API endpoint

import {Resolvers} from "./Resolvers";
import {IRootFactory} from "./api/IRootFactory";

export class RootFactory implements IRootFactory {
    private resolvers: Resolvers
    constructor(resolvers: Resolvers) {
        this.resolvers = resolvers
    }

    create(): Object {
        return {
            user: this.resolvers.getUserResolver,
            hello: () => {
                return 'Hello world!';
            }
        }
    }
}
