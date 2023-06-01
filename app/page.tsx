// We can define Metadata in two ways: Static and Dynamic

// 1. Static Metadata
// 2. Dynamic Metadata

export const metadata = {
	title: 'Home',
}

const Home = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>My Normal Next.js Page with Static Metadata</h1>
		</main>
	)
}

export default Home
