//Filtragem do q foi feito no repository//
import { GetTrendingMoviesWeekList } from "../Repository/Repository";

class TrendingMoviesWeekService {
  async getTrendingMoviesWeekList() {
    const repositoryResponse = await GetTrendingMoviesWeekList();
    if (repositoryResponse.status) {
      return repositoryResponse;
    }
  }
}
export default TrendingMoviesWeekService;
