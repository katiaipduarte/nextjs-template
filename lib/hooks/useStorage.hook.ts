import { useCallback, useEffect, useState } from 'react'

type Props = {
	key: string
	defaultValue: string | number | boolean | []
	storage: Storage
}

const useStorage = (props: Props) => {
	const { key, defaultValue, storage } = props

	const [value, setValue] = useState(() => {
		const jsonValue = storage.getItem(key)
		if (jsonValue != null) {
			return JSON.parse(jsonValue)
		}

		return defaultValue
	})

	useEffect(() => {
		if (value === undefined) {
			return storage.removeItem(key)
		}
		storage.setItem(key, JSON.stringify(value))
	}, [key, value, storage])

	const remove = useCallback(() => {
		setValue(undefined)
	}, [])

	return [value, setValue, remove]
}

export default useStorage
