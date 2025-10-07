require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const app = express();

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
