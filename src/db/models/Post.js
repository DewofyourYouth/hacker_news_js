import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: false,
    default: 0,
  },
});

export const Post = mongoose.model("Post", PostSchema);

// Helper functions
export async function getPosts() {
  return await Post.find().sort({ votes: 1 });
}

export async function createPost(content) {
  return await Post.create({ content });
}

export async function upvotePost(postId) {
  return await Post.findByIdAndUpdate(
    postId,
    { $inc: { votes: 1 } },
    { new: true }
  );
}
