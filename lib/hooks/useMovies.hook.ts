import { useQuery } from '@tanstack/react-query'

import fetchMovies from '@/lib/services/movies.service'

const useMovies = () => {
	const { data, error, isLoading, isError } = useQuery({
		queryKey: ['movies'],
		queryFn: fetchMovies,
		suspense: true,
		staleTime: 5 * 1000,
	})

	return {
		movies: data ?? [],
		isLoading,
		hasError: isError,
		error,
	}
}

export default useMovies
