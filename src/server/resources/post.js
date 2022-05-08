import { createPost, getPosts, upvotePost } from "../../db/models/Post";

import express from "express";

const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

postRouter.post("/", async (req, res) => {
  const { content } = req.body;
  const post = await createPost(content);
  res.json(post).status(201);
});

postRouter.patch("/:postId/vote", async (req, res) => {
  const { postId } = req.params;
  const post = await upvotePost(postId);
  res.json({ message: `Post with ID of ${postId} successfully upvoted!` });
});

export default postRouter;
