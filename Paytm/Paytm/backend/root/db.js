require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim : true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstName: {
        type: String,
        required: true,
        trim : true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim : true,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        trim : true,
        minLength: 8
    }
})

module.exports = {userSchema};