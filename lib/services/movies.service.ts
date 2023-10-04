import { type Movie } from '../types/movie.type'
import axiosInstance from './axios'

const fetchMovies = async (): Promise<Movie[]> => {
	const res = await axiosInstance.get<Movie[]>('/movies')

	return res.data
}

export default fetchMovies
