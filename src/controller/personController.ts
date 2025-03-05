import Persons from "../model/persons";
import Books from "../model/books";
import jwt from "jsonwebtoken";
import { randomUUID } from "node:crypto";
// import env from "../config/config";

export const findPersons = async () => {
  return await Persons.find();
};

export const findOne = async (email: string) => {
  return await Persons.findOne({ email });
};

export const createPerson = async (
  name: string,
  email: string,
  password: string
) => {
  return await Persons.create({
    id: `p${randomUUID()}`,
    name,
    email,
    password,
  });
};

export const updatePerson = async (
  id: string,
  name?: string,
  email?: string,
  password?: string
) => {
  const updatedData: { [key: string]: any } = {};

  if (name !== undefined) updatedData.name = name;
  if (email !== undefined) updatedData.email = email;
  if (password !== undefined) updatedData.password = password;

  return await Persons.findOneAndUpdate({ id }, updatedData);
};

export const newRead = async (userId: string, bookId: string) => {
  const person = await Persons.findOne({ id: userId });
  const alredyThere = person?.books.find((b) => b.id === bookId);

  if (alredyThere) return person;

  const book = await Books.findOne({ id: bookId });
  if (book) person?.books.push(book);

  return await person?.save();
};
