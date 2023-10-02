'use client'

import { useQuery } from '@tanstack/react-query'

import getMovies, { type Movie } from '@/services/movies.service'

const ListMovies = () => {
	const { data } = useQuery<Movie[]>({
		queryKey: ['stream-hydrate-movies'],
		queryFn: () => getMovies(),
		suspense: true,
		staleTime: 5 * 1000,
	})

	return <>{JSON.stringify(data)}</>
}

export default ListMovies
