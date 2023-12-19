import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  selectedPosition: String,
  coverLetter: String
});

export const Application = mongoose.model('Application', applicationSchema);
