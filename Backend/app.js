//skG13LFXeFLPJt34

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./routes/recipe-routes");
const authRoute = require("./routes/auth-routes");
const AuthModel = require("./model/auth");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/recipes", router);
app.use("/register", authRoute);
app.use("/login", authRoute);

mongoose
  .connect(
    "mongodb+srv://admin:skG13LFXeFLPJt34@cluster0.cjwmf53.mongodb.net/Recipeapp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected To Database");
    app.listen(5001, () => {
      console.log("Server is running on port 5001");
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
