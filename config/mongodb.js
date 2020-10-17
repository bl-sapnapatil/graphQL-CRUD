const mongoose = require('mongoose')

exports.databaseConnection = () => {
    mongoose.connect("mongodb://localhost:27017/graphql", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Successfully connected to the database')
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err)
        process.exit()
    })
}