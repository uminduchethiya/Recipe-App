const mongoose=require('mongoose');
const Schema= mongoose.Schema;
const recipeSchema=new Schema({
    Recipe_Name:{
        type:String,
        required:true
    },
    Ingreients:{
        type:String,
        required:true
    },
    Desription:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Recipe",recipeSchema);