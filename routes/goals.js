import express from "express";
import { getGoals } from "../models/index.js";

const goalsRouter = express.Router();

goalsRouter.get("/", async (req, res) => {
  const result = await getGoals();
  const payload = { success: true, payload: result };
  res.json(payload);
});

export default goalsRouter;
