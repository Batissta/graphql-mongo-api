import mongoose, { mongo, Types } from "mongoose";
import { typeBooks } from "../@types/typesMongoose";

const pessoasSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  books: {
    type: [typeBooks],
    ref: "books",
    required: true,
  },
});

export default mongoose.model("persons", pessoasSchema);
