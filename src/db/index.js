import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export const connectionString = process.env.MONGO_CONN_STRING;

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});
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

export const Post = mongoose.model("Post", PostSchema);
