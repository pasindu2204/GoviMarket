function buildTargetUrl(requestUrl) {
	const backendBaseUrl = process.env.BACKEND_URL || process.env.VITE_API_URL || 'http://localhost:5000'
	const incomingUrl = new URL(requestUrl)
	return `${backendBaseUrl}${incomingUrl.pathname}${incomingUrl.search}`
}

async function proxyRequest(request, response) {
	try {
		const targetUrl = buildTargetUrl(request.url)
		console.log('[proxy] contact-us ->', targetUrl)
		const upstreamResponse = await fetch(targetUrl, {
			method: request.method,
			headers: {
				'Content-Type': request.headers['content-type'] || 'application/json',
			},
			body: ['GET', 'HEAD'].includes(request.method) ? undefined : JSON.stringify(request.body || {}),
		})

		const contentType = upstreamResponse.headers.get('content-type') || 'application/json'
		response.status(upstreamResponse.status)
		response.setHeader('Content-Type', contentType)

		if (contentType.includes('application/json')) {
			const data = await upstreamResponse.json()
			return response.json(data)
		}

		const text = await upstreamResponse.text()
		return response.send(text)
	} catch (error) {
		return response.status(502).json({
			message: 'Unable to reach the backend contact service.',
			error: error.message,
		})
	}
}

export default async function handler(request, response) {
	if (request.method === 'OPTIONS') {
		response.setHeader('Access-Control-Allow-Origin', '*')
		response.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
		response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
		return response.status(204).end()
	}

	return proxyRequest(request, response)
}