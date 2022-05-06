import authorRouter from "./resources/Author.js";
import connectToMongo from "../db/index.js";
import express from "express";
import morgan from "morgan";
import postRouter from "./resources/Post.js";

const port = 3000;
const app = express();

connectToMongo();
// middlewares
app.use(express.json()); // normalize responses to JSON
app.use(morgan("tiny")); // log requests to console

// resources
app.use("/post", postRouter); // from post router
app.use("/author", authorRouter);
app.get("/", (_, res) => res.json({ message: "Hacker News is running" }));

// Run server and listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));
