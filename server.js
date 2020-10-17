const express = require("express");
require('./config/mongodb').databaseConnection();
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const app = express();


const userSchema = require('./graphql/index').userSchema;
app.use('/graphql', graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}));

// Up and Running at Port 4000
app.listen(4000, () => {
    console.log('A GraphQL API running at port 4000');
});