import { CategoryInput } from "../src/routes/categories/dto/category.input";
import { MovieInput } from "../src/routes/movies/dto/movie.input";
import { UserInput } from "../src/routes/user/dto/user.input";
import { Response } from "express";
const returnResponse = (
  status: number,
  message: String,
  data:
    | String
    | UserInput
    | MovieInput
    | CategoryInput
    | UserInput[]
    | MovieInput[]
    | CategoryInput[]
    | any,
  res: Response
) => {
  return res.json({
    status,
    message,
    data,
  });
};
export default returnResponse;
