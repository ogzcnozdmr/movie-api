const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/movie-api', {useMongoClient:true})

    mongoose.connection.on('open', () => {
        console.log("connected");
    });

    mongoose.connection.on('error', (err) => {
        console.log("connection failed");
    })
}