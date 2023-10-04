const movies = [
	{
		id: 1,
		title: 'Heat',
		year: '1995',
		runtime: '170',
		genres: ['Action', 'Crime', 'Drama'],
		director: 'Michael Mann',
	},
	{
		id: 2,
		title: 'L.A. Confidential',
		year: '1997',
		runtime: '138',
		genres: ['Crime', 'Drama', 'Mystery'],
		director: 'Curtis Hanson',
	},
	{
		id: 3,
		title: 'Blood Diamond',
		year: '2006',
		runtime: '143',
		genres: ['Adventure', 'Drama', 'Thriller'],
		director: 'Edward Zwick',
	},
]

export const GET = (_req: Request) => {
	try {
		return new Response(JSON.stringify(movies), { status: 200 })
	} catch (error) {
		return new Response(
			JSON.stringify({ status: 'Failed to load movies list' }),
			{ status: 500 }
		)
	}
}
