import { Model, Schema, connection, model } from "mongoose";
import { Category } from "../interfaces/category.interface";

const schema = new Schema<Category>({
  title: {
    type: String,
    required: true,
  },
});

const name = "Category";

export default connection && connection.models[name]
  ? (connection.models[name] as Model<Category>)
  : model<Category>(name, schema);
