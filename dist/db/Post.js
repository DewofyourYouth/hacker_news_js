"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;
exports.getPosts = getPosts;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PostSchema = _mongoose.default.Schema({
  content: {
    type: String,
    required: true
  }
});

const Post = _mongoose.default.model("Post", PostSchema); // Helper functions


exports.Post = Post;

async function getPosts() {
  return await Post.find();
}