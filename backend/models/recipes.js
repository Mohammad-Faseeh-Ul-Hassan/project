import mongoose from 'mongoose';

const recipesSchema = new mongoose.Schema({
    id: String,
    image: String,
    title: String,
});

export const recipeModel = mongoose.model('Recipe', recipesSchema);