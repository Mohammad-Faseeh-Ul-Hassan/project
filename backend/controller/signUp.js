import { SignUpModel } from '../models/signUp.js';

export const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new SignUpModel({
      email,
      password,
    });

    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Error creating user' });
  }
};
