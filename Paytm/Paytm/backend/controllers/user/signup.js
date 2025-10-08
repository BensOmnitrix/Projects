const { User, Account } = require("../../root/model");
const { signupSchema } = require("../../validation/signup");
const bcrypt = require("bcrypt");
const SALTROUNDS = Number(process.env.SALTROUNDS);

const signup = async (req, res) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      msg: "Input are not correct..Try again with correct inputs",
    });
  }

  const {username, password, firstName, lastName} = result.data;

  const existingUser = await User.findOne({
    username: username
  })

  if(existingUser){
    return res.status(400).json({
      success: false,
      msg: "Username already exists"
    })
  }

  const hashedPassword = await bcrypt.hash(password, SALTROUNDS);

  const newUser = new User({
    username: username,
    firstName: firstName,
    lastName: lastName, 
    password: hashedPassword
  })

  await newUser.save();

  const userId = newUser._id;

  const account = new Account({
    userId: userId,
    balance: 1 + Math.random()*10000
  })

  await account.save();

  res.status(200).json({
    success: true,
    msg: "SignedUp successfully and data has been added to the database"
  })

}

module.exports = { signup }