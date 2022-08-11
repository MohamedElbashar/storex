import mongoose from "mongoose";
import express, { Application, Request, Response, NextFunction } from "express";
import userController from "./routes/user/router/user.router";
import categoryController from "./routes/categories/router/category.router";
import movieController from "./routes/movies/router/movie.router";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
mongoose
  .connect("mongodb://localhost/storex")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB....");
  });
app.use(express.json());
app.use("/api/user", userController);
app.use("/api/category", categoryController);
app.use("/api/movie", movieController);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
