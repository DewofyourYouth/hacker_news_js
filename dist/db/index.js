"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.connectionString = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const connectionString = process.env.MONGO_CONN_STRING;
exports.connectionString = connectionString;

const connectToMongo = () => _mongoose.default.connect(connectionString);

var _default = connectToMongo;
exports.default = _default;