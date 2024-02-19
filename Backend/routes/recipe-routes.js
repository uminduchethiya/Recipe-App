const express = require("express");
const router = express.Router();
const Recipe = require("../model/Recipe");
const recipeController = require("../controllers/recipe-controller");

router.get("/", recipeController.getAllRecipe);
router.post("/", recipeController.addRecipe);
router.get("/:recipeId", recipeController.getById);
router.put("/:recipeId", recipeController.updateRecipe);
router.delete("/:recipeId", recipeController.deleteRecipe);

module.exports = router;
