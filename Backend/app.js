//skG13LFXeFLPJt34

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router=require("./routes/recipe-routes");

// Middleware
app.use(express.json());
app.use("/recipes",router)

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
