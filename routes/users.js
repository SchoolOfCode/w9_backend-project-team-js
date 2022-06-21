import  express  from "express";
import { user } from "../libs/index.js"

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    const result = getUser();
    const payload = { success: true, payload: result}
    res.json(payload);
});

export default userRouter;