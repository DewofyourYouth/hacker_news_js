"use strict";

var _Post = require("../db/Post.js");

var _index = _interopRequireDefault(require("../db/index.js"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 3000;
const app = (0, _express.default)();
(0, _index.default)();
app.use(_express.default.json());
app.get("/", (_, res) => res.json({
  message: "Hello world!"
}));
app.get("/posts", async (_, res) => {
  const posts = await (0, _Post.getPosts)();
  res.json(posts);
});
app.post("/post", async (req, res) => {
  const {
    content
  } = req.body;
  console.log(content);
  const post = await (0, _Post.createPost)(req.body.content);
  res.json(post).status(201);
});
app.delete("/post/:postId", async (req, res) => {
  const {
    postId
  } = req.params;
  const post = await (0, _Post.deletePost)(postId);
  const message = post ? `Successfully deleted post with ID of ${postId}!` : `No post found with an ID of ${postId}!`;
  res.json({
    message
  }).status(200);
});
app.listen(port, () => console.log(`Listening on port ${port}`));