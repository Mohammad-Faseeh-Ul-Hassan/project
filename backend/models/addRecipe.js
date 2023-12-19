import mongoose from "mongoose";

const recipeStructure = new mongoose.Schema({
  recipeId: String,
  recipeName: String,
  ingredients: String,
  instructions: String,
  image: String
});

export const AddRecipeModel = mongoose.model("AddRecipe", recipeStructure);
