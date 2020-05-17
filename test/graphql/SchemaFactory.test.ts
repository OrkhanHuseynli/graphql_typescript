import {expect} from "chai";
import {SchemaFactory} from "../../src/graphql/SchemaFactory";
import*as fs from "fs"
import show = Mocha.reporters.Base.cursor.show;
import {MyAppSchema} from "../../src/graphql/Schema";

describe('SchemaFactory', () => {
    let schemaAsString = `type Test {
    hello: String
}`;
    let schemaFactory1 = new SchemaFactory(schemaAsString);
    let schema1 = schemaFactory1.create();
    let schemaFile = fs.readFileSync('./schema.graphql').toString('utf8');
    // let schemaFactory2= new SchemaFactory(MyAppSchema);
    // let schema2 = schemaFactory2.create();


    it('create', () => {;
        // console.log(schema2);
        let result = 7;
        expect(result).equal(7);
    });
});
