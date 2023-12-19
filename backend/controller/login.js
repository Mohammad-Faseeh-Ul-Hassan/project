import { SignUpModel } from '../models/signUp.js';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await SignUpModel.findOne({ email, password });

    if (user) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Error logging in' });
  }
};
