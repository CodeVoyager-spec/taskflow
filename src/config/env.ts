import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: Number(process.env.PORT),
  databaseUrl: process.env.DATABASE_URL!,
};
