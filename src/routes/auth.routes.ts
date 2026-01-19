import { Router } from "express";

const router = Router();

router.post("/signup", async (req, res) => {
  res.status(201).json({ message: "Signup Route" });
});

router.post("/signin", async (req, res) => {
  res.status(201).json({ message: "Signin Route" });
});

export const authRouter = router;
