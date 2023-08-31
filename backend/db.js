const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://priyank384:Priyank384@quickbitescluster.fpsv7yf.mongodb.net/Quickbitesdata?retryWrites=true&w=majority'


const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to the database");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray()
        .then(data =>{
            console.log();
            
        })
        .catch(err=>{
            console.log(err);
           
        })
    })
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });
};

module.exports = mongoDB;