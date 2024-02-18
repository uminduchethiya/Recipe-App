const Recipe = require("../model/Recipe");
const getAllRecipe = async (req, res, next) => {
  let recipes;
  try {
    recipes = await Recipe.find();
  } catch (err) {
    console.log(err);
  }
  if (!recipes) {
    return res.status(404).json({ message: "No Product Found" });
  }
  return res.status(200).json({ recipes });
};

//view recipe by id
const getById = async (req, res, next) => {
  const ID = req.params.recipeId;
  let recipe;
  try {
    recipe = await Recipe.findById(ID);
  } catch (err) {
    console.log(err);
  }
  if (!recipe) {
    return res.status(500).json({ message: "No book found" });
  }
  return res.status(201).json({ recipe });
};

//add recipe
const addRecipe = async (req, res, next) => {
  let recipe;
  const { Recipe_Name, Ingreients, Desription,Image } = req.body;
  try {
    recipe = new Recipe({
      Recipe_Name,
      Ingreients,
      Desription,
      Image
    });
    await recipe.save();
  } catch (err) {
    console.log(err);
  }
  if (!recipe) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ recipe });
  
};
//updata Recipe
const updateRecipe=async(req,res,next)=>{
    const ID=req.params.recipeId;
    const{Recipe_Name, Ingreients, Desription,Image}=req.body;
    let recipe;
    try{
        recipe=await Recipe.findByIdAndUpdate(ID,{
            Recipe_Name,
            Ingreients,
            Desription, 
            Image 
        });
        recipe=await recipe.save();
    }
    catch(err){
        console.log(err)
    }
    if (!recipe) {
        return res.status(404).json({ message: "Unable To Update by this id" });
      }
      return res.status(200).json({ recipe });
      

}
//delete Recipe
const deleteRecipe= async(req,res,next)=>{
    const ID= req.params.recipeId;
    let recipe;
    try{
        recipe=await Recipe.findByIdAndDelete(ID)
    }catch(err){
        console.log(err);
    }  if (!recipe) {
        return res.status(404).json({ message: "Unable To delete by this id" });
      }
      return res.status(200).json({ message:"Product Suceefully Deleted" });
      
}

exports.getAllRecipe = getAllRecipe;
exports.addRecipe = addRecipe;
exports.getById = getById;
exports.updateRecipe=updateRecipe;
exports.deleteRecipe=deleteRecipe;
