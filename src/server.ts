import*as express from "express";

import {graphqlSchema} from "./graphql/schema";
import {RootFactory} from "./graphql/RootFactory";
import {GraphqlHandlerFactory} from "./graphql/GraphqlHandlerFactory";
import {Resolvers} from "./graphql/Resolvers";
import {Repository} from "./graphql/Repository";


const app = express();
const repository = new Repository();
const resolvers = new Resolvers(repository);
const rootFactory = new RootFactory(resolvers);
const graphqlHandlerFactory = new GraphqlHandlerFactory(graphqlSchema, rootFactory.getRootObject(), true);

app.use('/graphql', graphqlHandlerFactory.getHandler());


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');