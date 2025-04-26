import { movieApi } from "@/core/api/movie_api"
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;
}

export const topratedMoviesAction = async ({ page = 1, limit = 10 }: Options) => {
    try {

        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: page,
            }
        });

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        // console.log(JSON.stringify(data, null, 2));

        return movies;

    } catch (error) {
        console.log(error);
        throw "Cannot load top rated movies"

    }
}

