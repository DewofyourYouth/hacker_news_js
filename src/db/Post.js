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
