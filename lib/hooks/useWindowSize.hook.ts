import { useState } from 'react'

import useEventListener from './useEventListener.hook'

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	useEventListener({
		eventType: 'resize',
		callback: () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight })
		},
	})

	return windowSize
}

export default useWindowSize
