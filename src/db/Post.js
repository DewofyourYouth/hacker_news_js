import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

export const Post = mongoose.model("Post", PostSchema);

// Helper functions
export async function getPosts() {
  return await Post.find();
}

export async function createPost(content) {
  const post = await Post.create({ content });
  return post;
}

export async function deletePost(postId) {
  const post = await Post.findByIdAndDelete(postId);
  return post;
}
