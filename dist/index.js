"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 3000;
const app = (0, _express.default)();
app.get("/", (req, res) => res.json({
  message: "Hello world!"
}));
app.listen(port, () => console.log(`Listening on port ${port}`));