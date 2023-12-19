import mongoose from "mongoose";

const cussineSchema = new mongoose.Schema({
    title: String,
    pic: String,
});

export const cussineModel = mongoose.model("Cussine", cussineSchema);
