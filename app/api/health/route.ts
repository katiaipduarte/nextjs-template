export const GET = async (_req: Request) => {
	try {
		return new Response(JSON.stringify({ status: 'ok' }), { status: 200 })
	} catch (error) {
		return new Response(JSON.stringify({ status: 'error' }), { status: 500 })
	}
}
