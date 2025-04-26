import { movieApi } from "../../api/movie_api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";

export const getMovieByIdAction = async (
    id: number | string
): Promise<CompleteMovie> => {
    try {
        const response = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

        console.log('Película - HTTP Cargada')

        return MovieMapper.fromTheMovieDBToCompleteMovie(response.data);
    } catch (error) {
        console.error("Failed to fetch movie by ID:", error);
        throw new Error("Unable to load movie details");
    }
};