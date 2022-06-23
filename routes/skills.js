import express from "express";
import { skills } from "../libs/index.js";
import {
  createSkill,
  getSkills,
  updateSkill,
  deleteSkillById,
} from "../models/index.js";

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

skillsRouter.put("/:id", async function (req, res) {
  let searchedId = req.params.id;
  let result = await updateSkill(searchedId, req.body);
  res.json(result);
});

skillsRouter.delete("/:id", async function (req, res) {
  const searchedId = Number(req.params.id);
  deleteSkillById(searchedId);
  const result = {
    success: true,
    payload: `The skills with id: ${searchedId} has been deleted`,
  };
  res.json(result);
});

export default skillsRouter;
