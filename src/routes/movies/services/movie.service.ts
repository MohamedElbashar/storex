import { MovieInput } from "../dto/movie.input";
import { Movie } from "../../../../schemas/movie.model";

export class MovieService {
  static async createMovie(movieInput: MovieInput): Promise<Movie> {
    let currentMovie = await Movie.findOne({ title: movieInput.title });
    if (currentMovie) {
      throw new Error("Movie already exists");
    }
    currentMovie = new Movie(movieInput);
    await currentMovie.save();
    return currentMovie;
  }

  static async getAllMovies(): Promise<Movie[]> {
    const movies = await Movie.find({});
    return movies;
  }

  static async getCurrentMovie(movieId: String): Promise<Movie> {
    const currentMovie = await Movie.findById(movieId).populate("category");
    if (!currentMovie) {
      throw new Error("Movie not found");
    }
    return currentMovie;
  }
  static async deleteMovie(movieId: String): Promise<Movie> {
    const movie = await Movie.findByIdAndRemove(movieId);
    if (!movie) {
      throw new Error("Movie not found");
    }
    return movie;
  }
  static async updateMovie(movieId: String): Promise<Movie> {
    const movie = await Movie.findByIdAndUpdate(movieId, movie, { new: true });
    if (!movie) {
      throw new Error("Movie not found");
    }
    return movie;
  }
}
