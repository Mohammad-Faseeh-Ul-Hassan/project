import express from "express";
import {getRecipe} from "../controller/viewRecipe.js";

const router = express.Router();

router.get("/",getRecipe);

export default router;   