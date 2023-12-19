import mongoose from 'mongoose';

const signUpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const SignUpModel = mongoose.model('SignUp', signUpSchema);
