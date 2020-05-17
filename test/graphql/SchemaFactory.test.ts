import {assert} from "chai";
import {SchemaFactory} from "../../src/graphql/SchemaFactory";

describe('SchemaFactory', () => {
    let schemaAsString = `type Test {
    hello: String
}`;
    let schemaFactory = new SchemaFactory(schemaAsString);
    let schema = schemaFactory.create();
    it('create', () => {;
        assert.isNotNull(schema)
    });
});
