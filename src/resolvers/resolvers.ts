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

    findOnePerson: async (_: unknown, { email }: { email: string }) =>
      await findOne(email),

    findAllBooks: async () => await findAllBooks(),

    findOneBook: async (_: unknown, { name }: { name: string }) =>
      await findOneBook(name),
  },
  Mutation: {
    createPerson: async (_: unknown, { name, email, password }: Person) =>
      await createPerson(name, email, password),

    updatePerson: async (_: unknown, { id, name, email, password }: Person) =>
      await updatePerson(id!, name, email, password),

    newRead: async (
      _: unknown,
      { userId, bookId }: { userId: string; bookId: string }
    ) => await newRead(userId, bookId),

    createBook: async (_: unknown, { name, author, gender, pages }: Book) =>
      await createBook(name, author, gender, pages),

    updateBook: async (_: unknown, { id, name, author, gender, pages }: Book) =>
      await updateBook(id!, name, author, gender, pages),
  },
};
