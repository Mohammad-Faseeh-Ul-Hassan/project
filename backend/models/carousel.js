import mongoose from 'mongoose';

// Define a Mongoose schema for carousel slides
const slideSchema = new mongoose.Schema({
  image: String,
  alt: String,
  heading: String,
  description: String
});

export const Slide = mongoose.model('Slide', slideSchema);
