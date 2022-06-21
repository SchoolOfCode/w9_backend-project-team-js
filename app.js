import express from "express";

const app = express();
const PORT = process.env.PORT || 3001

// So that we can understand any jsons that are returned
app.use(express.json)

app.get("/", (req, res) => {
    res.json({ message: "hello from server" })
});

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})