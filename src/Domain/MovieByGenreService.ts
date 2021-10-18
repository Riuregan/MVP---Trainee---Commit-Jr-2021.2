//Filtragem do q foi feito no repository//
import { GetMoviesByGenreList } from "../Repository/Repository";

class MoviesByGenreService {
  async getMoviesByGenreList() {
    const repositoryResponse = await GetMoviesByGenreList();
    if (repositoryResponse.status) {
      return repositoryResponse;
    }
  }
}
export default MoviesByGenreService;
