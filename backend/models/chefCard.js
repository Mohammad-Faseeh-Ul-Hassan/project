import mongoose from 'mongoose';

const chefSchema = new mongoose.Schema({
    image: String,
    title: String,
});

export const chefModel = mongoose.model('chef', chefSchema);
