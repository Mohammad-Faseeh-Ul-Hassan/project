import mongoose from "mongoose";

const memberShipSchema = new mongoose.Schema({
    id: Number,
    title: String,
    subtitle: String,
    description: String
});

export const cardModel = mongoose.model("Card", memberShipSchema);
