import connectToMongo from "../db/index.js";
import dotenv from "dotenv";
import express from "express";
import { getPosts } from "../db/Post.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

connectToMongo();
app.use(express.json());
app.get("/", (_, res) => res.json({ message: "Hello world!" }));

app.get("/post", async (_, res) => {
  const posts = await getPosts();
  res.json(posts);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
