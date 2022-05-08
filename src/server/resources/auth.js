import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.json({ message: "Hello Auth!" });
});

export default authRouter;
