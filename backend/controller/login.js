import { SignUpModel } from '../models/signUp.js';
import Jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await SignUpModel.findOne({ email });

    if (user.password === password) {
      const token = Jwt.sign({userId: user._id}, 'mohammadfaseehulhassan', {expiresIn: '1h'});
      console.log(token);
      if(user.email === 'rathorefaseeh7861@gmail.com') {
        const email = user.email;
        res.json({message: true, token, email});
      } else {
        res.json({ message: true, user, token });
      }
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Error logging in' });
  }
};