import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    default: null,
  },
  dateCreated: {
    type: Date,
    default: () => Date.now(),
    required: true,
    immutable: true,
  },
});

export const Post = mongoose.model("Post", PostSchema);

// Helper functions
export async function getPosts() {
  return await Post.find().sort({ dateCreated: -1 });
}

export async function getPost(postId) {
  return await Post.findById(postId).populate("author");
}

export async function createPost(content, author) {
  const post = await Post.create({ content, author });
  return post;
}

export async function updatePost(postId, update) {
  return await Post.findByIdAndUpdate(postId, update, {
    new: true,
  }).catch((e) => console.log(e));
}

export async function deletePost(postId) {
  return await Post.findByIdAndDelete(postId);
}
