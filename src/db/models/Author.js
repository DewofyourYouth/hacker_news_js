import mongoose from "mongoose";

export const AuthorSchema = mongoose.Schema({
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
    unique: true,
    validate: {
      validator: (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.exec(v),
      message: (props) =>
        `emailAddress '${props.value}' is not a valid address.`,
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

export async function createAuthor(firstName, lastName, emailAddress) {
  return await Author.create({ firstName, lastName, emailAddress }).catch(
    (e) => {
      throw new Error(e);
    }
  );
}

export async function updateAuthor(authorId, update) {
  return await Author.findByIdAndUpdate(authorId, update, { new: true }).catch(
    (e) => {
      throw new Error(e);
    }
  );
}

export async function deleteAuthor(authorId) {
  return await Author.findByIdAndDelete(authorId);
}
