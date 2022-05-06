import { createPost, deletePost, getPosts, updatePost } from "../db/Post.js";

import connectToMongo from "../db/index.js";
import express from "express";
import morgan from "morgan";

const port = 3000;
const app = express();

connectToMongo();
// middlewares
app.use(express.json()); // normalize responses to JSON
app.use(morgan("tiny")); // log requests to console

// resources
app.get("/", (_, res) => res.json({ message: "Hacker News is running" }));

app.get("/posts", async (_, res) => {
  const posts = await getPosts();
  res.json(posts);
});

app.post("/post", async (req, res) => {
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

app.patch("/post/:postId", async (req, res) => {
  if (!req.query) throw new Error("Updating a post requires query strings");
  const { postId } = req.params;
  const post = await updatePost(postId, req.query);
  if (!post)
    res.status(404).json({ message: `Post with ID: ${postId} not found!` });
  res.json(post);
});

// Run server and listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));
