import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';


const QueryRootType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        user: {
            type: UserType,
            args: {
                id:
                    {
                        type: GraphQLString
                    }
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {
            type: GraphQLString,
            defaultValue: 'N/A default name',
        },
    })
});

export const MyAppSchema = new GraphQLSchema({
    query: QueryRootType
    // mutation: MyAppMutationRootType
});