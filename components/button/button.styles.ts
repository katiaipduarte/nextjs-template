import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
	[
		'justify-center',
		'inline-flex',
		'items-center',
		'rounded-xl',
		'text-center',
		'border',
		'transition-colors',
		'delay-50',
	],
	{
		variants: {
			intent: {
				primary: [
					'bg-orange-400',
					'border-orange-400',
					'text-white',
					'hover:enabled:border-orange-700',
					'hover:enabled:bg-orange-700',
				],
				secondary: [
					'bg-transparent',
					'text-orange-400',
					'hover:enabled:bg-orange-400',
					'hover:enabled:text-white',
				],
				danger: [
					'bg-red-400',
					'border-red-400',
					'text-white',
					'hover:enabled:bg-red-700',
					'hover:enabled:border-red-700',
				],
			},
			size: {
				sm: ['min-w-20', 'h-full', 'min-h-10', 'text-sm', 'py-1.5', 'px-4'],
				lg: ['min-w-32', 'h-full', 'min-h-12', 'text-lg', 'py-2.5', 'px-6'],
			},
		},
		defaultVariants: {
			intent: 'primary',
			size: 'lg',
		},
	}
)
