import*as express from "express";

import*as graphqlHTTP from "express-graphql";
import {graphqlSchema} from "./graphql/schema";
import {graphqlRoot} from "./graphql/root";


const app = express();
app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlRoot,
    graphiql: true,
}));


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');