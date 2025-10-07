const mongoose = require("mongoose");
const { userSchema } = require("./db");

const User = mongoose.model("User",userSchema)

module.exports = {User};