// import express from "express";
// import { createRecipe } from "../controller/addRecipe.js";

// const router = express.Router();
// router.post("/",createRecipe);

// export default router;



import express from "express";
import { createRecipe } from "../controller/addRecipe.js";
import multer from 'multer';

const router = express.Router();

// Set up multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Set the destination folder where the uploaded files will be stored
        cb(null, 'uploads'); // Replace 'uploads' with your desired folder path
    },
    filename: function (req, file, cb) {
        // Set the filename for the uploaded file
        cb(null, file.originalname); // You can modify the filename as needed
    }
});

// Create a multer instance with the defined storage configuration
const upload = multer({ storage: storage });

// Route for creating a new recipe
router.post("/", upload.single('image'), createRecipe);

export default router;
