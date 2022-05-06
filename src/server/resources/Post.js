import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../../db/models/Post.js";

import express from "express";

const postRouter = express.Router();

postRouter.get("/", async (_, res) => {
  const posts = await getPosts();
  res.json(posts);
});

postRouter.get("/:postId", async (req, res) => {
  const post = await getPost(req.params.postId);
  res.json(post);
});

postRouter.post("/", async (req, res) => {
  const post = await createPost(req.body.content);
  res.json(post).status(201);
});

postRouter.delete("/:postId", async (req, res) => {
  const { postId } = req.params;
  const post = await deletePost(postId);

  const message = post
    ? `Successfully deleted post with ID of ${postId}!`
    : `No post found with an ID of ${postId}!`;

  res.json({ message }).status(200);
});

postRouter.patch("/:postId", async (req, res) => {
  if (!req.query) throw new Error("Updating a post requires query strings");
  const { postId } = req.params;
  const post = await updatePost(postId, req.query);
  if (!post)
    res.status(404).json({ message: `Post with ID: ${postId} not found!` });
  res.json(post);
});

export default postRouter;
