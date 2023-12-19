import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import addRecipes from './routes/addRecipe.js';
import updateRecipes from './routes/updateRecipe.js'
import viewRecipes from './routes/viewRecipe.js';
import deleteRecipes from './routes/deleteRecipe.js';
import logins from './routes/login.js';
import signUps from './routes/signUp.js';
const app= express();
const url=
"mongodb+srv://faseehrathore:123@cluster0.lr0qoyv.mongodb.net/recipeHub?retryWrites=true&w=majority";

mongoose.connect(url)
.then(() => console.log("connected to db"))
.catch(() => console.log("not connected"));

app.listen(5000);

app.use(cors());
app.use(bodyParser.json ({ extended: true }));
app.use(bodyParser.urlencoded ( {extended: true}));

app.use('/admin',addRecipes);
app.use('/admin',updateRecipes);
app.use('/admin',viewRecipes);
app.use('/admin/:id',deleteRecipes);

app.use('/signup',signUps);
app.use('/login',logins);