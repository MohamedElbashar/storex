import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IRequestType } from "../utils/requestType";

export const auth = (req: IRequestType, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, "PRIVATEKEY");

    if (req.user) {
      req.user = decoded;
    }

    next();
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};
