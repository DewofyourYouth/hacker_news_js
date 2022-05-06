import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: () => Date.now(),
    required: true,
    immutable: true,
  },
  dateUpdated: {
    type: Date,
    default: () => Date.now(),
    required: true,
  },
});

PostSchema.post("save", function (next) {
  this.dateUpdated = Date.now();
  next();
});

export const Post = mongoose.model("Post", PostSchema);

// Helper functions
export async function getPosts() {
  return await Post.find();
}

export async function getPost(postId) {
  return await Post.findById(postId);
}

export async function createPost(content) {
  return await Post.create({ content });
}

export async function updatePost(postId, update) {
  return await Post.findByIdAndUpdate(postId, update, {
    new: true,
  }).catch((e) => console.log(e));
}

export async function deletePost(postId) {
  return await Post.findByIdAndDelete(postId);
}
