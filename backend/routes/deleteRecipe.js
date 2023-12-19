import express from "express";
import { deleteRecipe } from "../controller/deleteRecipe.js";

const router = express.Router();
router.delete("/:recipeId", deleteRecipe);


export default router;
