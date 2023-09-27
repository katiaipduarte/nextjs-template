import Link from 'next/link'

export const metadata = {
	title: 'Home',
}

const Home = () => (
	<main className='flex min-h-screen flex-col items-center justify-between p-24'>
		<h1>My Normal Next.js Page with Static Metadata</h1>

		<Link href='/about'>
			<h2>About Page &rarr;</h2>
			<p>Playwright will test if this link is working.</p>
		</Link>
	</main>
)

export default Home
