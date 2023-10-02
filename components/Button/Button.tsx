/* eslint-disable */
import { VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from './styles'

type ButtonProps = {
	onClickButton: () => void
} & ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>

const Button = (props: ButtonProps): JSX.Element => {
	const { className, intent, size, onClickButton } = props

	return (
		<button
			className={twMerge(buttonVariants({ intent, size, className }))}
			onClick={onClickButton}
			{...props}
		>
			{props.children}
		</button>
	)
}

export default Button
