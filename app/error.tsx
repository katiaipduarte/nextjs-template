'use client' // Error components must be Client components

import { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<main>
			<h1>Something went wrong!</h1>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</main>
	)
}

export default Error
