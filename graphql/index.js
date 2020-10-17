const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema } = graphql;
const queryType = require('./queries/user').queryType;
const mutation = require('./mutations/index');

exports.userSchema = new GraphQLSchema({
    query: queryType,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation
    })
})

