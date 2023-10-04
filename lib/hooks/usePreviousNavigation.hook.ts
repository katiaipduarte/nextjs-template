import Router from 'next/router'
import { useEffect, useMemo } from 'react'

const usePreviousNavigation = () => {
	const cachedScrollPositions: Array<number[]> = useMemo(() => [], [])

	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual'
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			let shouldScrollRestore: any

			Router.events.on('routeChangeStart', () => {
				if (!shouldScrollRestore) {
					cachedScrollPositions.push([window.scrollX, window.scrollY])
				}
			})

			Router.events.on('routeChangeComplete', () => {
				if (shouldScrollRestore) {
					const { x, y } = shouldScrollRestore
					window.scrollTo(x, y)
					shouldScrollRestore = false
				}
			})

			Router.beforePopState(() => {
				if (cachedScrollPositions.length > 0) {
					const [x, y] = cachedScrollPositions.pop() ?? []
					shouldScrollRestore = { x, y }
				}
				return true
			})
		}
	}, [cachedScrollPositions])
}

export default usePreviousNavigation
