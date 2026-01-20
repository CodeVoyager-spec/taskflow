import dotenv from "dotenv";
import app from "./app";
import { env } from "./config/env"

dotenv.config();

const PORT = env.port

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
}

startServer();

