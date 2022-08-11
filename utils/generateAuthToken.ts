import jwt = require("jsonwebtoken");
import { ObjectId } from "mongoose";
import { User } from "../schemas/user.model";
import { UserInput } from "../src/routes/user/dto/user.input";
import dotenv from "dotenv";
dotenv.config();

const generateAuthToken = (user: UserInput) => {
  const token: string = jwt.sign(
    { email: user.email, isAdmin: user.isAdmin },
    "PRIVATEKEY"
  );
  return token;
};

export default generateAuthToken;
