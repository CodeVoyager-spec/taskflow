import express from "express";
import { authRouter } from "./routes/auth.routes"

const app = express();

app.use(express.json());

app.use("/taskflow/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Taskflow saas API running");
});

export default app;
