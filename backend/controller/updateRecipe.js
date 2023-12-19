import { AddRecipeModel } from "../models/addRecipe.js";

export const updateRecipe = async (req, res) => {
    const recipeId = req.body.recipeId;
    const recipeIdInString = recipeId.toString();
   
    const recipeName = req.body.recipeName;
    const recipeNameInStringFormat = recipeName.toString();
   
    const ingredients = req.body.ingredients;
    const ingredientsInStringFormat = ingredients.toString();

    const instructions = req.body.instructions;
    const instructionsInStringFormat = instructions.toString();

    try {
        const updatedRecipe = await AddRecipeModel.findOneAndUpdate(
            { recipeId: recipeIdInString },
            {
                recipeId: recipeIdInString,
                recipeName: recipeNameInStringFormat,
                ingredients: ingredientsInStringFormat,
                instructions: instructionsInStringFormat
            },
            { new: true, upsert: true }
        );
        
        res.json(updatedRecipe);
    } catch (error) {
        console.log("Update failed...");
        res.status(500).json({ message: "Update failed..." });
    }
};

