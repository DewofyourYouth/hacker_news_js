import {
  createAuthor,
  deleteAuthor,
  getAuthors,
  updateAuthor,
} from "../../db/models/Author";

import express from "express";

const authorRouter = express.Router();

authorRouter.get("/", async (req, res) => {
  const authors = await getAuthors();
  res.json(authors);
});

authorRouter.post("/", async (req, res) => {
  const { firstName, lastName, emailAddress } = req.body;
  const author = await createAuthor(firstName, lastName, emailAddress).catch(
    (err) => res.json({ error: err.message }).status(400)
  );
  res.json(author).status(201);
});

export default authorRouter;
