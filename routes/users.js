import express from "express";
import { user } from "../libs/index.js";
import { getUser } from "../models/index.js";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  const result = await getUser();
  const payload = { success: true, payload: result };
  res.json(payload);
});

export default userRouter;
