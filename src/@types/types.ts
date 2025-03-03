export type Book = {
  id: string;
  name: string;
  author: string;
  gender: string;
  pages: number;
};

export type Person = {
  id: string;
  name: string;
  email: string;
  password: string;
  books: [string];
};
