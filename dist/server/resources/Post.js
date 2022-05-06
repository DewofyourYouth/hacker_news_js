"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = require("../../db/models/Post.js");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postRouter = _express.default.Router();

postRouter.get("/", async (_, res) => {
  const posts = await (0, _Post.getPosts)();
  res.json(posts);
});
postRouter.post("/", async (req, res) => {
  const post = await (0, _Post.createPost)(req.body.content);
  res.json(post).status(201);
});
postRouter.delete("/:postId", async (req, res) => {
  const {
    postId
  } = req.params;
  const post = await (0, _Post.deletePost)(postId);
  const message = post ? `Successfully deleted post with ID of ${postId}!` : `No post found with an ID of ${postId}!`;
  res.json({
    message
  }).status(200);
});
postRouter.patch("/:postId", async (req, res) => {
  if (!req.query) throw new Error("Updating a post requires query strings");
  const {
    postId
  } = req.params;
  const post = await (0, _Post.updatePost)(postId, req.query);
  if (!post) res.status(404).json({
    message: `Post with ID: ${postId} not found!`
  });
  res.json(post);
});
var _default = postRouter;
exports.default = _default;