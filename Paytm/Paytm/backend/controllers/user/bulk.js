const { User } = require("../../root/model");

const express = require("express");

const bulk = async (req, res) => {
  const filter = req.query.filter || "";

  try {
    const users = await User.find({
      $or: [
        { firstName: { $regex: filter, $options: "i" } },
        { lastName: { $regex: filter, $options: "i" } },
      ],
    });

    const filteredUsers = users.map(user => ({
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
    }))

    return res.status(200).json({
      success: true,
      data: filteredUsers,
      msg: "Successfully found the data",
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      success: false,
      msg: "Data could not be found",
    });
  }
};

module.exports = { bulk }