import  express  from "express";
import { skills } from "../libs/index.js"
import { getSkills } from "../models/index.js";

const skillsRouter = express.Router();

skillsRouter.get("/", async(req, res) => {
    const result = await getSkills();
    const payload = { success: true, payload: result}
    res.json(payload);
});

export default skillsRouter;