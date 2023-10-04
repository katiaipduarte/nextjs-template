'use client'

import useMovies from '@/lib/hooks/useMovies.hook'

const ListMovies = () => {
	const { movies } = useMovies()

	return <>{JSON.stringify(movies)}</>
}

export default ListMovies
