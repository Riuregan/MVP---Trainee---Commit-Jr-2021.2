import { Router } from "express";
const router = Router();
import GenreController from "./api";

const GenreList = new GenreController();
//const MovieByGenreList = new GenreController();
router.get("/genreList", GenreList.getGenreList);
router.get("/movieByGenreList", GenreList.getMoviesByGenreList);
router.get("/trendingMoviesOfTheWeek", GenreList.getTrendingMoviesWeekList);

export default router;
