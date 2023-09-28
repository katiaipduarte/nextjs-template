/* eslint-disable */
import { type ButtonHTMLAttributes } from 'react'

type ButtonProps = {
	onClickButton: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonProps): JSX.Element => {
	const { onClickButton } = props

	return (
		<button onClick={onClickButton} {...props}>
			{props.children}
		</button>
	)
}

export default Button
