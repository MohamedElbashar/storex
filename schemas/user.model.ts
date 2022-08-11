import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt = require("jsonwebtoken");
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  BirthDate: { type: Date, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY);
  return token;
};

const User = mongoose.model("User", UserSchema);
export { User };
