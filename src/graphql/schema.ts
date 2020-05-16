// Construct a schema, using GraphQL schema language
import {buildSchema} from "graphql";

export const graphqlSchema = buildSchema(`
  type Query {
    user(id: String!): User
    hello: String
  }
  
  type User {
  id: String!
  name: String!
    }
`);