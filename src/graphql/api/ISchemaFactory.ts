import {GraphQLSchema} from "graphql/type/schema";

export interface ISchemaFactory {
    create(): GraphQLSchema
}