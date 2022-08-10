import mongoose from "mongoose";
import express, { Application, Request, Response, NextFunction } from "express";
require("dotenv").config();

const app: Application = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost/storex")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB....");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
