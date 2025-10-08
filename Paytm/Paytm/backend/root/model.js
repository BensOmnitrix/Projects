const mongoose = require("mongoose");
const { userSchema, accountSchema } = require("./db");

const User = mongoose.model("User",userSchema)
const Account = mongoose.model("Account",accountSchema)

module.exports = {User,Account};