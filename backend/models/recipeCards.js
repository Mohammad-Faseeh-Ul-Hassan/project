import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    id: String,
    image: String,
    title: String,
});

export const recipeModel = mongoose.model('Recipe', recipeSchema);