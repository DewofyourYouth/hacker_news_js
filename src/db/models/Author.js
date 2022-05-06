import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.exec(v),
    },
  },
});

export const Author = mongoose.model("Author", AuthorSchema);

// helper functions
export async function getAuthors() {
  return await Author.find();
}

export async function getAuthor(authorId) {
  return await Author.findById(authorId);
}

export async function createAuthor(firstName, lastName, email) {
  return await Author.create(firstName, lastName, email);
}

export async function updateAuthor(authorId, update) {
  return await Author.findByIdAndUpdate(authorId, update, { new: true }).catch(
    (e) => console.log(e)
  );
}

export async function deleteAuthor(authorId) {
  return await Author.findByIdAndDelete(authorId);
}
