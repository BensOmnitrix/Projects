const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/signup");
const { signin } = require("../controllers/signin");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { updateUserInfo } = require("./updateUserInfo");

router.route("/signup").post(signup); 
router.route("/signin").get(signin);

router.use(authMiddleware);

router.route("/update").put(updateUserInfo)

module.exports = router;
