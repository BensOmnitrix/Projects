const mongoose = require("mongoose");
const { Account } = require("../../root/model");
const transfer = async (req, res) => {
    const session = await mongoose.startSession();
  try {
    await session.startTransaction(); // Start the transaction
    const from = req.userId;
    const { to, amount } = req.body;

    const fromAccount = await Account.findOne({
      userId: from,
    }).session(session);

    if (!fromAccount || fromAccount.balance < amount) {
      await session.abortTransaction(); // Abort the transaction
      return res.status(200).json({
        success: false,
        msg: "Insufficient Balance",
      });
    }

    const toAccount = await Account.findOne({
      userId: to,
    }).session(session);

    if (!toAccount) {
      await session.abortTransaction(); // Abort the transaction
      return res.status(200).json({
        success: false,
        msg: "Invalid account",
      });
    }

    await Account.updateOne(
      { userId: from },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    await session.commitTransaction();

    return res.status(200).json({
      success: true,
      msg: "Payment done successfully",
    });
  } catch (err) {
    await session.abortTransaction();
    console.log(err);
    return res.status(200).json({
      success: false,
      msg: "Payment Failed",
    });
  }
};

module.exports = { transfer };
