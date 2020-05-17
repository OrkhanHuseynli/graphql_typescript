import*as express from "express";

import {GraphqlHandlerFactory} from "./graphql/GraphqlHandlerFactory";
import {Repository} from "./graphql/Repository";
import {graphQLSchema} from "./schema";


const app = express();
const repository = new Repository();
const graphqlHandlerFactory = new GraphqlHandlerFactory(graphQLSchema, repository, true);

app.use('/graphql', graphqlHandlerFactory.create());
// app.use('/graphql', (re,rq)=>{console.log("listening ")});


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');