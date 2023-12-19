import mongoose from "mongoose";

const deleteRecipeSchema = new mongoose.Schema({
    recipeId: String,
});

export const deleteRecipeModel = mongoose.model("deleteRecipe", deleteRecipeSchema);