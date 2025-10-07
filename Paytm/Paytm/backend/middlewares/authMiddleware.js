const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(403).json({
      success: false,
      msg: "No token provided",
    });
  }
  const bearer = authHeader.split(" ")[0];
  const token = authHeader.split(" ")[1];

  if (bearer != "Bearer") {
    return res.status(403).json({
      success: false,
      msg: "Invalid token1",
    });
  }

  if (!token) {
    return res.status(400).json({
      success: false,
      msg: "No token provided",
    });
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    if (decode.id) {
      req.userId = decode.id;
      return next();
    } else {
      return res.status(403).json({
        success: false,
        msg: "Invalid token 2",
      });
    }
  } catch (err) {
    return res.status(403).json({
      success: false,
      msg: "Invalid token 3",
    });
  }
};

module.exports = { authMiddleware };
