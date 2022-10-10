const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://shivam910:india1121025@cluster0.iwli40u.mongodb.net/test"

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI,{
            useNewUrlParser: true
        });
        console.log("connected to db !");
    } catch (error) {
        console.log(error);
        throw error;
    }
}
module.exports = InitiateMongoServer;