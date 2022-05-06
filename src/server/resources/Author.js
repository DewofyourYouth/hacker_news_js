import {
  createAuthor,
  deleteAuthor,
  getAuthors,
  updateAuthor,
} from "../../db/models/Author";

import express from "express";

const authorRouter = express.Router();

authorRouter("/", async (req, res) => {
  const authors = await getAuthors();
  res.json(authors);
});

export default authorRouter;
