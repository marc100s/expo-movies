import { movieApi } from "@/core/api/movie_api"
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingMoviesAction = async () => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        // console.log(JSON.stringify(data, null, 2));

        return movies;

    } catch (error) {
        console.log(error);
        throw "Cannot load upcoming movies"

    }
}

