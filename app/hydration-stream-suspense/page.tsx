import { Suspense } from 'react'

import ListMovies from '@/components/ListMovies/ListMovies'

const HydrationStreamSuspense = () => (
	<main className='flex min-h-screen flex-col items-center justify-between p-24'>
		<h1>movies</h1>
		<Suspense
			fallback={<p className='text-center'>loading... on initial request</p>}
		>
			<ListMovies />
		</Suspense>
	</main>
)

export default HydrationStreamSuspense
