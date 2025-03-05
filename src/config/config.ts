import dotenv from "dotenv";

dotenv.config();

interface Env {
  MONGO_URI_CONNECTION: string;
  SECRET: string;
  ROUNDS: number;
}

const env: Env = {
  MONGO_URI_CONNECTION: process.env.MONGO_URI_CONNECTION || "connection_string",
  SECRET: process.env.SECRET || "abc",
  ROUNDS: Number(process.env.PORT || "10"),
};

export default env;
