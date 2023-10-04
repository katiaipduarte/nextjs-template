import { useEffect, useRef } from 'react'

type Props = {
	eventType: string
	callback: (e: Event) => void
	element?: HTMLElement
}

const useEventListener = (props: Props) => {
	const { eventType, callback, element = window } = props

	const callbackRef = useRef(callback)

	useEffect(() => {
		callbackRef.current = callback
	}, [callback])

	useEffect(() => {
		const handler: EventListenerOrEventListenerObject = (e) =>
			callbackRef.current(e)
		element.addEventListener(eventType, handler)

		return () => element.removeEventListener(eventType, handler)
	}, [eventType, element])
}

export default useEventListener
