"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Author = void 0;
exports.createAuthor = createAuthor;
exports.deleteAuthor = deleteAuthor;
exports.getAuthors = getAuthors;
exports.updateAuthor = updateAuthor;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AuthorSchema = _mongoose.default.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true,
    validate: {
      validator: v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.exec(v)
    }
  }
});

const Author = _mongoose.default.model("Author", AuthorSchema); // helper functions


exports.Author = Author;

async function getAuthors() {
  return await Author.find();
}

async function createAuthor(firstName, lastName, email) {
  return await Author.create(firstName, lastName, email);
}

async function updateAuthor(authorId, update) {
  return await Author.findByIdAndUpdate(authorId, update, {
    new: true
  }).catch(e => console.log(e));
}

async function deleteAuthor(authorId) {
  return await Author.findByIdAndDelete(authorId);
}