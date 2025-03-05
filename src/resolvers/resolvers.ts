import {
  findOne,
  createPerson,
  findPersons,
  updatePerson,
  newRead,
} from "../controller/personController";

import {
  createBook,
  findAllBooks,
  findOneBook,
  updateBook,
} from "../controller/booksController";
import { Person, Book } from "../@types/types";

export const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello, world! Seja muito bem-vindo!";
    },

    findAllPersons: async () => await findPersons(),

    findOnePerson: async (_: any, { email }: { email: string }) => {
      return await findOne(email);
    },

    findAllBooks: async () => await findAllBooks(),

    findOneBook: async (_: any, { name }: { name: string }) => {
      return await findOneBook(name);
    },
  },
  Mutation: {
    createPerson: async (_: any, { name, email, password }: Person) =>
      await createPerson(name, email, password),

    updatePerson: async (
      _: any,
      { id, name, email, password }: Person,
      { auth }
    ) => {
      if (!auth) throw new Error("Usuário não autorizado!");

      return await updatePerson(id!, name, email, password);
    },

    newRead: async (
      _: any,
      { userId, bookId }: { userId: string; bookId: string },
      { auth }
    ) => {
      if (!auth) throw new Error("Usuário não autorizado!");
      return await newRead(userId, bookId);
    },

    createBook: async (_: any, { name, author, gender, pages }: Book) =>
      await createBook(name, author, gender, pages),

    updateBook: async (
      _: any,
      { id, name, author, gender, pages }: Book,
      { auth }
    ) => {
      if (!auth) throw new Error("Usuário não autorizado!");

      return await updateBook(id!, name, author, gender, pages);
    },
  },
};
