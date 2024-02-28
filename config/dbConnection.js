const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);  
        console.log(`Connected!: Host: ${connect.connection.host}`)      
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;