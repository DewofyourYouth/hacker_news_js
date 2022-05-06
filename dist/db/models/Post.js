"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;
exports.createPost = createPost;
exports.deletePost = deletePost;
exports.getPosts = getPosts;
exports.updatePost = updatePost;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PostSchema = _mongoose.default.Schema({
  content: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: () => Date.now(),
    required: true,
    immutable: true
  },
  dateUpdated: {
    type: Date,
    default: () => Date.now(),
    required: true
  }
});

PostSchema.post("save", function (next) {
  this.dateUpdated = Date.now();
  next();
});

const Post = _mongoose.default.model("Post", PostSchema); // Helper functions


exports.Post = Post;

async function getPosts() {
  return await Post.find();
}

async function createPost(content) {
  return await Post.create({
    content
  });
}

async function updatePost(postId, update) {
  return await Post.findByIdAndUpdate(postId, update, {
    new: true
  }).catch(e => console.log(e));
}

async function deletePost(postId) {
  return await Post.findByIdAndDelete(postId);
}