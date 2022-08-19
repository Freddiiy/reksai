const baseUrl = 'https://ddragon.leagueoflegends.com';
const DDragonEndpoints = {
	createUrl: (endpoint: string) => `${(baseUrl)}${endpoint}`,
	createApiUrl: (endpoint: string) => `${baseUrl}/api${endpoint}`,
	createCdnUrl: (endpoint: string) => `${(baseUrl)}/cdn${endpoint}`,
}
export default DDragonEndpoints;