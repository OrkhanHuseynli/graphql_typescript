import * as graphqlHTTP from "express-graphql";
import {GraphQLSchema} from "graphql/type/schema";
import {IGraphqlHandlerFactory, MiddleWare} from "./api/IGraphqlHandlerFactory";
import {Resolvers} from "./Resolvers";
import {RootFactory} from "./RootFactory";
import {IRepository} from "./api/IRepository";
import {graphQLSchema} from "../schema";

export class GraphqlHandlerFactory implements IGraphqlHandlerFactory {
    private readonly schema: GraphQLSchema;
    private readonly root: Object;
    private readonly enabledGraphiql;

    constructor(schema: GraphQLSchema, repository: IRepository, enabledGraphiql: boolean) {
        let rootFactory = new RootFactory(new Resolvers(repository));
        this.schema = schema; //schemaFactory.create();
        this.root = rootFactory.create();
        this.enabledGraphiql = enabledGraphiql;
    }


    public create(): MiddleWare {
        return graphqlHTTP({
            schema: this.schema,
            rootValue: this.root,
            graphiql: this.enabledGraphiql,
        });
    };
}