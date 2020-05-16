import * as graphqlHTTP from "express-graphql";
import {GraphQLSchema} from "graphql/type/schema";
import {IGraphqlHandlerFactory, MiddleWare} from "./api/IGraphqlHandlerFactory";

export class GraphqlHandlerFactory implements IGraphqlHandlerFactory {
    private readonly schema: GraphQLSchema;
    private readonly root: Object;
    private readonly enabledGraphiql;

    constructor(schema: GraphQLSchema, root: object, enabledGraphiql: boolean) {
        this.schema = schema;
        this.root = root;
        this.enabledGraphiql = enabledGraphiql;

    }

    public getHandler(): MiddleWare {
        return graphqlHTTP({
            schema: this.schema,
            rootValue: this.root,
            graphiql: this.enabledGraphiql,
        });
    };
}