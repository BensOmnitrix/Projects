const mongoose = require("mongoose");

export const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    amount: Number,
})