import  express  from "express";
import { skills } from "../libs/index.js"

const skillsRouter = express.Router();

skillsRouter.get("/", (req, res) => {
    const result = getUser();
    const payload = { success: true, payload: result}
    res.json(payload);
});

export default skillsRouter;