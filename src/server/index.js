import { createPost, deletePost, getPosts } from "../db/Post.js";

import connectToMongo from "../db/index.js";
import express from "express";
import morgan from "morgan";

const port = 3000;
const app = express();

connectToMongo();
// middleware
app.use(express.json()); // res.json
app.use(morgan("tiny")); // log requests to console

// resources
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

// Run server and listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`));
