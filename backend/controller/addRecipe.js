import { AddRecipeModel } from "../models/addRecipe.js";

export const createRecipe = async (req, res) => {
   
    const recipeId = req.body.recipeId;
    const recipeIdInString = recipeId.toString();
   
    const recipeName = req.body.recipeName;
    const recipeNameInStringFormat = recipeName.toString();
   
    const ingredients = req.body.ingredients;
    const ingredientsInStringFormat = ingredients.toString();

    const instructions = req.body.instructions;
    const instructionsInStringFormat = instructions.toString();


    const newRecipe = new AddRecipeModel({
        
        recipeId: recipeIdInString,
 
        recipeName: recipeNameInStringFormat,

        ingredients: ingredientsInStringFormat,

        instructions: instructionsInStringFormat

    });
   
    try{
    await newRecipe.save();
    res.json(newRecipe);
    } 
    
    catch (error) {
console.log("Not Saved...");
    }
};





// import { AddRecipeModel } from "../models/addRecipe.js";

// export const createRecipe = async (req, res) => {
//     const recipeId = req.body.recipeId;
//     const recipeName = req.body.recipeName;
//     const ingredients = req.body.ingredients;
//     const instructions = req.body.instructions;

//     // Assuming 'image' is the field name for the uploaded image in the form
//     const image = req.file; // Access the uploaded image file

//     const newRecipe = new AddRecipeModel({
//         recipeId: recipeId,
//         recipeName: recipeName,
//         ingredients: ingredients,
//         instructions: instructions,
//         imagePath: image ? image.path : '' // Store the image path if available, otherwise an empty string
//     });

//     try {
//         await newRecipe.save();
//         res.json(newRecipe);
//     } catch (error) {
//         console.log("Not Saved...", error);
//         res.status(500).send("Error while saving the recipe.");
//     }
// };
