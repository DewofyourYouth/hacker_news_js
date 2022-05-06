"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Post = void 0;
exports.createPost = createPost;
exports.deletePost = deletePost;
exports.getPosts = getPosts;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const PostSchema = _mongoose.default.Schema({
  content: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: false,
    default: () => Date.now(),
    mutate: false,
  },
});

const Post = _mongoose.default.model("Post", PostSchema); // Helper functions

exports.Post = Post;

async function getPosts() {
  return await Post.find();
}

async function createPost(content) {
  const post = await Post.create({
    content,
  });
  return post;
}

async function deletePost(postId) {
  const post = await Post.findByIdAndDelete(postId);
  return post;
}
