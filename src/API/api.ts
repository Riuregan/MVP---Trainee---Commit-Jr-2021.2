import { Request, Response } from "express";
import GenreService from "../Domain/GenreService";
import MovieByGenreService from "../Domain/MovieByGenreService";
import TrendingMoviesWeekService from "../Domain/TrendingMoviesWeekService";
class GenreController {
  async getGenreList(request: Request, response: Response) {
    try {
      const genreData = new GenreService();
      const genreList = await genreData.getGenreList();

      if (genreList != null) {
        return response.send(genreList);
      }

      return response.send({ err: "Err" });
    } catch (err) {
      throw err;
    }
  }
  async getMoviesByGenreList(request: Request, response: Response) {
    try {
      const movieByGenreData = new MovieByGenreService();
      const movieByGenreList = await movieByGenreData.getMoviesByGenreList();

      if (movieByGenreList != null) {
        return response.send(movieByGenreList);
      }

      return response.send({ err: "Err" });
    } catch (err) {
      throw err;
    }
  }
  async getTrendingMoviesWeekList(request: Request, response: Response) {
    try {
      const trendingMoviesWeekData = new TrendingMoviesWeekService();
      const trendingMoviesWeekList =
        await trendingMoviesWeekData.getTrendingMoviesWeekList();

      if (trendingMoviesWeekList != null) {
        return response.send(trendingMoviesWeekList);
      }

      return response.send({ err: "Err" });
    } catch (err) {
      throw err;
    }
  }
}

export default GenreController;
