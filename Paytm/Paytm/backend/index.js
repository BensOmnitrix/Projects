require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const mainRouter = require("./routes/index");
const { authMiddleware } = require("./middlewares/authMiddleware");

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter);

// Route not Found Handler  
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    msg: "Route not found",
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    msg: "Something went wrong on our server. Please try again later.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
