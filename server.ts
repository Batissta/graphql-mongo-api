import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/schema/typeDefs";
import { resolvers } from "./src/resolvers/resolvers";
import jwt from "jsonwebtoken";
import env from "./src/config/config";
import mongoose from "mongoose";
import persons from "./src/model/persons";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const authHeader = req.headers.authorization || "";
    console.log(authHeader);

    const token = authHeader.replace("Bearer ", "");
    if (!token) return { auth: false, req };
    try {
      const decoded = jwt.verify(token, env.SECRET);
      console.log(decoded);

      return { user: await persons.findOne({ id: decoded }), auth: true, req };
    } catch (error) {
      return { auth: false, req };
    }
  },
});

mongoose
  .connect(env.MONGO_URI_CONNECTION)
  .then(() => {
    server.listen().then(({ url }) => {
      console.log(`🚀 HTTP Server running ${url}`);
    });
  })
  .catch(() => {
    console.log("Wasn't abble to connect with the database!");
  });
