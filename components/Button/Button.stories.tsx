import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Button',
	},
	argTypes: {},
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
	render: (args) => <Button {...args} />,
}

export default meta
