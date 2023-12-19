import mongoose from 'mongoose';

const AluminiSchema = new mongoose.Schema({
    id: Number,
    image: String,
    text: String
});

export const AluminilumniModel = mongoose.model('Alumini', AluminiSchema);
