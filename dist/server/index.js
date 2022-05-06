"use strict";

var _index = _interopRequireDefault(require("../db/index.js"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _Post = _interopRequireDefault(require("./resources/Post.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 3000;
const app = (0, _express.default)();
(0, _index.default)(); // middlewares

app.use(_express.default.json()); // normalize responses to JSON

app.use((0, _morgan.default)("tiny")); // log requests to console
// resources

app.use("/post", _Post.default); // from post router

app.get("/", (_, res) => res.json({
  message: "Hacker News is running"
})); // Run server and listen for requests

app.listen(port, () => console.log(`Listening on port ${port}`));