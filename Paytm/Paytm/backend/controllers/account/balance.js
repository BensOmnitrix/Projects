const { Account } = require("../../root/model");
const balance = async (req, res) => {
  const userId = req.userId;
  try {
    const account = await Account.findOne({
      userId: userId,
    });
    return res.status(200).json({
        success: false,
        balance: account.balance
    })
  } catch (err) {
    return res.status(200).json({
      success: false,
      msg: "Balance could not be fetched",
    });
  }
};

module.exports = { balance };
