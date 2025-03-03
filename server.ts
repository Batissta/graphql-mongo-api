import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/schema/typeDefs";
import { resolvers } from "./src/resolvers/resolvers";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGO_URI_CONNECTION || "")
  .then(() => {
    server.listen().then(({ url }) => {
      console.log(`🚀 HTTP Server running ${url}`);
    });
  })
  .catch(() => {
    console.log("Wasn't abble to connect with the database!");
  });
