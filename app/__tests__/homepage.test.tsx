import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Home from '../page'

describe('Home', () => {
	it('renders homepage unchanged', () => {
		const { container } = render(<Home />)
		expect(container).toMatchSnapshot()
	})

	it('renders a heading', () => {
		render(<Home />)

		const heading = screen.getByRole('heading', {
			name: /my normal next\.js page with static metadata/iu,
		})

		expect(heading).toBeInTheDocument()
	})
})
