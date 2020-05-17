import {buildSchema} from "graphql";
import {GraphQLSchema} from "graphql/type/schema";
import {Source} from "graphql/language/source";
import {ISchemaFactory} from "./api/ISchemaFactory";

/**
 * Some schemas maybe provided in a text format.
 * This factory converts them into ts defined schema
 * for the use in the GraphQl Root.
 */
export class SchemaFactory implements ISchemaFactory {
    private readonly source: string|Source
    constructor(source: string|Source) {
        this.source = source
    }
    public create(): GraphQLSchema {
        return buildSchema(this.source);
    }
}