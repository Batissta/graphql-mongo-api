import Books from "../model/books";
import { randomUUID } from "node:crypto";

export const findAllBooks = async () => {
  return await Books.find();
};

export const findOneBook = async (name: String) => {
  return await Books.findOne({ name });
};

export const createBook = async (
  name: String,
  author: String,
  gender: String,
  pages: Number
) => {
  return await Books.create({
    id: `b${randomUUID()}`,
    name,
    author,
    gender,
    pages,
  });
};

export const updateBook = async (
  id: String,
  name?: String,
  author?: String,
  gender?: String,
  pages?: Number
) => {
  const updatedData: { [key: string]: any } = {};

  if (name !== undefined) updatedData.name = name;
  if (author !== undefined) updatedData.author = author;
  if (gender !== undefined) updatedData.gender = gender;
  if (pages !== undefined) updatedData.pages = pages;

  return await Books.findOneAndUpdate({ id }, updatedData);
};
