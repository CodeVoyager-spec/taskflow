import express from "express";
import { env } from "./config/env";

const app = express();
const port = env.port;

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Taskflow saas API running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
