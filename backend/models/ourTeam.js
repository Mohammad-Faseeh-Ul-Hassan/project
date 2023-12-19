import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    id: Number,
    image: String,
    title: String,
    text: String,
});

export const CardModel = mongoose.model('Card', teamSchema);
