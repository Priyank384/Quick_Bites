const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://priyank384:Priyank384@quickbitescluster.fpsv7yf.mongodb.net/Quickbitesdata?retryWrites=true&w=majority'


const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });
};

module.exports = mongoDB;