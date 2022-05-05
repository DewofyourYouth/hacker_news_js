import express from "express";
const port = 3000;
const app = express();

app.get("/", (req, res) => res.json({ message: "Hello world!" }));

app.listen(port, () => console.log(`Listening on port ${port}`));
