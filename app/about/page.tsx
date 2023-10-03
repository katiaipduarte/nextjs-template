import Form from '@/components/Form/Form'

export const metadata = {
	title: 'About',
}

const About = () => (
	<main className='flex min-h-screen flex-col items-center justify-between p-24'>
		<h1>About Page</h1>
		<Form />
	</main>
)

export default About
