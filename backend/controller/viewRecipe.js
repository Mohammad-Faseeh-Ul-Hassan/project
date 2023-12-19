import { AddRecipeModel } from "../models/addRecipe.js"; 



export const getRecipe = async (req, res) => {
  
try{
  const recipes = await AddRecipeModel.find();
  res.json(recipes);
}

catch (error) {
console.log("Not found any data.");
}
};