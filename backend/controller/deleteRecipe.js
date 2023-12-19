import { AddRecipeModel } from "../models/addRecipe.js";
export const deleteRecipe = async (req, res) => {
  console.log("delete api reached.");

  const {recipeId} = req.params;

    console.log(recipeId);
    
    try {
      // Check if the recipeId exists and delete it
      const deletedRecipe = await AddRecipeModel.findOneAndDelete({ _id: recipeId });
      
      if (!deletedRecipe) {
        return res.status(404).json({ success: false, message: "Recipe not found or already deleted." });
      }
  
      return res.json({ success: true, message: "Recipe deleted successfully." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Deletion failed." });
    }
  };
  