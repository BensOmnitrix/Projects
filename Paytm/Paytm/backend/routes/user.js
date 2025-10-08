const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/user/signup");
const { signin } = require("../controllers/user/signin");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { updateUserInfo } = require("../controllers/user/updateUserInfo");
const { bulk } = require("../controllers/user/bulk");

router.route("/signup").post(signup);
router.route("/signin").get(signin);
router.use(authMiddleware);
router.route("/update").put(updateUserInfo);
router.route("/bulk").get(bulk);

module.exports = router;
