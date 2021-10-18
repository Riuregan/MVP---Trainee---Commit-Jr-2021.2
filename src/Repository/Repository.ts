import api from "../config/axios";
import api_key from "../config/env";
const genre: number = 878;

async function GetGenresList() {
  try {
    const response = await api.get(
      `/3/genre/movie/list?api_key=${api_key}&language=en-US`
    );
    if (response.status >= 200 && response.status < 300) {
      const genreList = response.data;
      return {
        status: true,
        data: genreList,
      };
    }

    return {
      status: false,
      data: "Failed the request",
    };
  } catch (err) {
    throw err;
  }
}

async function GetMoviesByGenreList() {
  try {
    const response = await api.get(
      `/3/discover/movie?api_key=${api_key}&language=en-US&year=2021&with_genres=${genre}`
    );
    if (response.status >= 200 && response.status < 300) {
      const moviesByGenreList = response.data;
      return {
        status: true,
        data: moviesByGenreList,
      };
    }
    return {
      status: false,
      data: "Failed the request",
    };
  } catch (err) {
    throw err;
  }
}
async function GetTrendingMoviesWeekList() {
  try {
    const response = await api.get(`/3/trending/movie/week?api_key=${api_key}`);
    if (response.status >= 200 && response.status < 300) {
      const trendingMoviesWeekList = response.data;
      return {
        status: true,
        data: trendingMoviesWeekList,
      };
    }

    return {
      status: false,
      data: "Failed the request",
    };
  } catch (err) {
    throw err;
  }
}
export { GetGenresList, GetMoviesByGenreList, GetTrendingMoviesWeekList };
