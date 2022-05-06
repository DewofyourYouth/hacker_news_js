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
    mutate: false,
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

export async function updatePost(postId, update) {
  const updatedPost = await Post.findByIdAndUpdate(postId, update, {
    new: true,
  }).catch((e) => console.log(e));
  return updatedPost;
}

export async function deletePost(postId) {
  const post = await Post.findByIdAndDelete(postId);
  return post;
}
