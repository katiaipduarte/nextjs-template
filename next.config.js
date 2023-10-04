const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
	openAnalyzer: false,
})

module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	rewrites() {
		return [
			{ source: '/healthz', destination: '/api/health' },
			{ source: '/api/healthz', destination: '/api/health' },
			{ source: '/health', destination: '/api/health' },
			{ source: '/ping', destination: '/api/health' },
		]
	},
})
