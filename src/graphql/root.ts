// The root provides a resolver function for each API endpoint

import {Resolvers} from "./resolvers";

export const graphqlRoot = {
    user: Resolvers.userResolver,
    hello: () => {
        return 'Hello world!';
    },
};
