const graphql = require('graphql');
const { GraphQLObjectType, GraphQLNonNull } = graphql;
const GraphQLID = require('graphql').GraphQLID;
const GraphQLString = require('graphql').GraphQLString;

// User Type
exports.userType = new GraphQLObjectType({
    name: 'user',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: GraphQLString
            }
        }
    }
});

