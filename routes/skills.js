import express from "express";
import { skills } from "../libs/index.js";
import { getSkills } from "../models/index.js";
import { createSkill } from "../models/index.js";

const skillsRouter = express.Router();

skillsRouter.get("/", async (req, res) => {
  const result = await getSkills();
  const payload = { success: true, payload: result };
  res.json(payload);
});

skillsRouter.post("/", async (req, res) => {
  const body = req.body;
  const payload = await createSkill(body);
  res.json(payload);
});

export default skillsRouter;
