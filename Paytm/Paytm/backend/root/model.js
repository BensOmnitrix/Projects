const { userSchema } = require("./db");

const User = mongoose.model("User",userSchema)