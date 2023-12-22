import { SignUpModel } from '../models/signUp.js';
export const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new SignUpModel({
      email,
      password
    });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Error creating user' });
  }
};





// import userModel from "../models/users.js";
// import bcrypt from "bcrypt";

// export const addUser = async (req , res) =>{
//     console.log("post api reached...");

//     // const name = req.body.username;
//     // const email = req.body.email;
//     // const pass = req.body.password;z

//     const { username, email, password } = req.body;

//     const existingUser = userModel.find({email : email});

//     // console.log(password);
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password,salt);
//     console.log(hashedPassword);
    
//     const newUser = new userModel({
//         name : username,
//         email : email,
//         password : hashedPassword
//     });


//     // Handle saving newProduct to the database or other operations here
//     try {
//        const result =  await newUser.save();
//         console.log("Data Saved In DB...");
//         res.json(newUser);
//     } catch (error) {
//         console.log("Not Saved...");
//     }
// };
