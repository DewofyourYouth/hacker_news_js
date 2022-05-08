import authRouter from "./resources/auth";
import connectToMongo from "../db/index.js";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import postRouter from "./resources/post.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

connectToMongo();
app.use(express.json());
app.use("/auth", authRouter);
app.use(
  morgan(":method ':url' status=:status response-time=:response-time ms")
);
app.use("/post", postRouter);

app.get("/", (_, res) => res.json({ message: "Hello world!" }));

app.listen(port, () => console.log(`Listening on port ${port}`));
