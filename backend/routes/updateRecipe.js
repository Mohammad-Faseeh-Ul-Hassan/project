import express from "express";
import { updateRecipe } from "../controller/updateRecipe.js";

const router = express.Router();
router.put("/",updateRecipe);

export default router;