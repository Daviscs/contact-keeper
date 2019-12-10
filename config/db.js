const mongoose = require('mongoose');
const config = require('config');
//Grabs the value of mongoURI in default.json
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log("mongoDB connected")
    }
    catch (err) {
        console.log("mongodb Error")
        process.exit(1)
    }
}

module.exports = connectDB