import mongoose, { mongo } from "mongoose";
import { typeBooks } from "../@types/typesMongoose";

const booksSchema = new mongoose.Schema(typeBooks);

export default mongoose.model("books", booksSchema);
