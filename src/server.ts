import express from "express";
import { env } from "./config/env";
import { authRouter } from "./routes/auth.routes";

const app = express();
const port = env.port;

app.use(express.json());

app.use("/taskflow/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Taskflow saas API running");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
