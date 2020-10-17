const graphql = require('graphql');
const { GraphQLString, GraphQLNonNull } = graphql;
const UserType = require('../types/user');
const UserModel = require('../../models/user');

exports.remove = {
    type: UserType.userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const removeduser = UserModel.findByIdAndRemove(params.id).exec();
        if (!removeduser) {
            throw new Error('Error')
        }
        return removeduser;
    }
}
