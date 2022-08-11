import express, { Request, Response } from "express";
import { MovieService } from "../services/movie.service";
import returnResponse from "../../../../utils/returnResponse";
import { auth } from "../../../../middleware/auth";
import movieValidation from "../validation/movieValidation";
const router = express.Router();

router.post(
  "/",
  [auth, movieValidation],
  async (req: Request, res: Response) => {
    try {
      const movie = await MovieService.createMovie(req.body);
      return returnResponse(200, "Movie created successfully", movie, res);
    } catch (err) {
      return returnResponse(
        400,
        "There Is An Error While Retrieving Movie",
        err,
        res
      );
    }
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const movies = await MovieService.getAllMovies();
    return returnResponse(200, "Movies retrieved successfully", movies, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Retrieving Movies",
      err,
      res
    );
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const movie = await MovieService.getCurrentMovie(req.params.id);
    return returnResponse(200, "Movie retrieved successfully", movie, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Retrieving Movie",
      err,
      res
    );
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const movie = await MovieService.updateMovie(req.params.id);
    return returnResponse(200, "Movie updated successfully", movie, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Updating Movie",
      err,
      res
    );
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const movie = await MovieService.deleteMovie(req.params.id);
    return returnResponse(200, "Movie deleted successfully", movie, res);
  } catch (err) {
    return returnResponse(
      400,
      "There Is An Error While Deleting Movie",
      err,
      res
    );
  }
});

export default router;
