const { User } = require("../../root/model");
const bcrypt = require("bcrypt");
const SALTROUNDS = process.env.SALTROUNDS;
const { updateUserSchema } = require("../../validation/update");

const updateUserInfo = async (req, res) => {
  const id = req.userId;

  const result = updateUserSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(411).json({
      success: false,
      msg: "Error while updating information",
    });
  }

  let { password } = result.data;
  if (password) {
    password = await bcrypt.hash(password, SALTROUNDS);
    req.body.password = password;
  }

  try {
    const updatedData = await User.findByIdAndUpdate(id, req.body);

    return res.status(200).json({
      success: true,
      data: updatedData,
      msg: "Data is updated successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      msg: "Data could not be updated",
    });
  }
};

module.exports = { updateUserInfo };
