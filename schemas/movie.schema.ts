import mongoose, { Schema } from "mongoose";

const MovieSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rate: { type: Number, required: true },
  Image: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Movie = mongoose.model("Movie", MovieSchema);
export { Movie };
