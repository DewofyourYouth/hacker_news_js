"use strict";

var _index = _interopRequireDefault(require("../db/index.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _Post = require("../db/Post.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const port = process.env.PORT;
const app = (0, _express.default)();
(0, _index.default)();
app.use(_express.default.json());
app.get("/", (_, res) => res.json({
  message: "Hello world!"
}));
app.get("/post", async (_, res) => {
  const posts = await (0, _Post.getPosts)();
  res.json(posts);
});
app.listen(port, () => console.log(`Listening on port ${port}`));