const express = require("express");
const { balance } = require("../controllers/account/balance");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { transfer } = require("../controllers/account/transfer");
const router = express.Router();

router.use(authMiddleware);
router.route("/balance").get(balance);
router.route("/transfer").post(transfer);

module.exports = router 