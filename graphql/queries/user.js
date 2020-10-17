const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList } = graphql;
const UserModel = require('../../models/user');
const userType = require('../types/user').userType;

// Query
exports.queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            users: {
                type: new GraphQLList(userType),
                resolve: function () {
                    const users = UserModel.find().exec()
                    if (!users) {
                        throw new Error('Error')
                    }
                    return users
                }
            }
        }
    }
});

