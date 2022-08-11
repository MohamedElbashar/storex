import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  title: { type: String, required: true },
});

const Category = mongoose.model("Category", CategorySchema);
export { Category };
