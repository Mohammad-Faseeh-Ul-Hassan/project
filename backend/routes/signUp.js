import express from "express";
import { createUser } from "../controller/signUp.js";

const router = express.Router();
router.post("/",createUser);

export default router;