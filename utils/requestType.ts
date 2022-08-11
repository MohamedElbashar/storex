import { Request } from "express";

export interface IRequestType extends Request {
  user: any;
}
