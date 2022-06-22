import express from "express";
import { getGoals, createGoal, updateGoal } from "../models/index.js";

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

goalsRouter.put("/:id", async function (req, res) {
  let searchedId = req.params.id;
  let result = await updateGoal(searchedId, req.body);
  res.json(result);
});

export default goalsRouter;
