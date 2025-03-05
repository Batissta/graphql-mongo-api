import { gql } from "apollo-server";

export const typeDefs = gql`
  type Book {
    id: String!
    name: String!
    author: String!
    gender: String!
    pages: Int!
  }

  type Person {
    id: String!
    name: String!
    email: String!
    password: String!
    books: [Book]
  }

  type Query {
    helloWorld: String!

    findAllPersons: [Person]!
    findOnePerson(email: String!): Person

    findAllBooks: [Book]!
    findOneBook(name: String!): Book!
  }

  type Mutation {
    createPerson(name: String!, email: String!, password: String!): Person

    updatePerson(
      id: String!
      name: String
      email: String
      password: String
    ): Person

    newRead(userId: String!, bookId: String!): Person

    createBook(
      name: String!
      author: String!
      gender: String!
      pages: Int!
    ): Book

    updateBook(
      id: String!
      name: String
      author: String
      gender: String
      pages: Int
    ): Book
  }
`;
