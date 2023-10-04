import { type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { buttonVariants } from './button.styles'

type ButtonProps = {
	onClickButton: () => void
} & ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>

const Button = (props: ButtonProps): JSX.Element => {
	const { className, intent, size, children, onClickButton } = props

	return (
		<button
			className={twMerge(buttonVariants({ intent, size, className }))}
			onClick={onClickButton}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
