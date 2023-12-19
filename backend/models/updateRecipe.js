import mongoose from 'mongoose';

const updateStructure = new mongoose.Schema({
  recipeId: String,
  recipeName: String,
  ingredients: String,
  instructions: String,
});

export const updatedRecipeModel = mongoose.model('UpdatedRecipe', updateStructure);
