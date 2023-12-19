import mongoose from 'mongoose';

// Create a schema for user login information
const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a Mongoose model named LoginModel based on the loginSchema
export const loginModel = mongoose.model('login', loginSchema);
