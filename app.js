import express from "express";
import skillsRouter from "./routes/skills.js";
import userRouter from "./routes/users.js";
import goalsRouter from "./routes/goals.js";

const app = express();
const PORT = process.env.PORT || 3001;

// So that we can understand any jsons that are returned
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from server" });
});

app.use("/user", userRouter);
app.use("/skills", skillsRouter);
app.use("/goals", goalsRouter);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

export default app;
