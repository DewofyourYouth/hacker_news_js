import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export const connectionString = process.env.MONGO_CONN_STRING;

const connectToMongo = () => mongoose.connect(connectionString);

export default connectToMongo;
