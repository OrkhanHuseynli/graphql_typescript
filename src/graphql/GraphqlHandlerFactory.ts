import * as graphqlHTTP from "express-graphql";
import {GraphQLSchema} from "graphql/type/schema";
import {IGraphqlHandlerFactory, MiddleWare} from "./api/IGraphqlHandlerFactory";
import {Resolvers} from "./Resolvers";
import {RootFactory} from "./RootFactory";
import {IRepository} from "./api/IRepository";
import {SchemaFactory} from "./SchemaFactory";
import {MyAppSchema} from "./Schema";

export class GraphqlHandlerFactory implements IGraphqlHandlerFactory {
    private readonly schema: GraphQLSchema;
    private readonly root: Object;
    private readonly enabledGraphiql;

    private readonly tempschema = `type Query {
    user(id: String!): User
    hello: String
}

type User {
    id: String!
    name: String!
}`;

    constructor(repository: IRepository, enabledGraphiql: boolean) {
        let schemaFactory = new SchemaFactory(this.tempschema);
        let rootFactory = new RootFactory(new Resolvers(repository));
        this.schema = MyAppSchema; //schemaFactory.create();
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