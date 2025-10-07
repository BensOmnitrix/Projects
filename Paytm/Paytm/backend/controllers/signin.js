const { success } = require("zod");
const { signinSchema } = require("../validation/signin");
const jwt = require("jsonwebtoken");
const { User } = require("../root/model");
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");

const signin = async (req, res) => {
  const result = signinSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      msg: "Input value are not correct...TRy again after adding correct inputs",
    });
  }
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({
      username: username,
    });

    if (!existingUser || !(await bcrypt.compare(password, existingUser.password))) {
      return res.status(400).json({
        success: false,
        msg: "Invalid username or password",
      });
    }

    const token = jwt.sign(
      { id: existingUser._id, username: existingUser.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
        success: true,
        data: {
            token: token,
        },
        msg: "Signin Successfully"
    })
  } catch (err) {
    console.log(err);
    return res.status(400).json({
        success: false,
        msg: "Server error"
    })
  }
};

module.exports = {signin}
