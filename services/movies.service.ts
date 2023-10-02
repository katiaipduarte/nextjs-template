export type Movie = {
	id: number
	title: string
	year: number
	runtime: number
	genres: string[]
	director: string
}

import { env } from '@/env.mjs'

const getMovies = async (): Promise<Movie[]> => {
	const res = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/movies`, {
		cache: 'force-cache',
	})
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	return res.json() as unknown as Movie[]
}

export default getMovies
