import express from "express";
import { getGoals, createGoal } from "../models/index.js";

const goalsRouter = express.Router();

goalsRouter.get("/", async (req, res) => {
  const result = await getGoals();
  const payload = { success: true, payload: result };
  res.json(payload);
});

goalsRouter.post("/", async (req, res) => {
  const body = req.body;
  const payload = await createGoal(body);
  res.json(payload);
});

export default goalsRouter;
