import { createPost, deletePost, getPosts } from "../db/Post.js";

import connectToMongo from "../db/index.js";
import express from "express";

const port = 3000;
const app = express();

connectToMongo();
app.use(express.json());
app.get("/", (_, res) => res.json({ message: "Hello world!" }));

app.get("/posts", async (_, res) => {
  const posts = await getPosts();
  res.json(posts);
});

app.post("/post", async (req, res) => {
  const { content } = req.body;
  console.log(content);
  const post = await createPost(req.body.content);
  res.json(post).status(201);
});

app.delete("/post/:postId", async (req, res) => {
  const { postId } = req.params;
  const post = await deletePost(postId);

  const message = post
    ? `Successfully deleted post with ID of ${postId}!`
    : `No post found with an ID of ${postId}!`;

  res.json({ message }).status(200);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
