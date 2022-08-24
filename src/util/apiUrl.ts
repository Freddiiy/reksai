const createUrl = (region: PLATFORM | REGIONAL | string) => `https://${region}.api.riotgames.com`

export enum PLATFORM {
	BR= "br1",
	EUN="eun1",
	EUW="euw1",
	JP1="jp1",
	KR="kr1",
	LA1="la1",
	LA2="la2",
	NA="na1",
	OC="oc1",
	TR="tr1",
	RU="ru1",

}
export enum REGIONAL {
	AMERICAS="americas",
	ASIA="asia",
	EUROPE="europe",
	SEA="sea",
}

const API = {
	platform: (region: PLATFORM | string) => createUrl(region),
	regional: (region: REGIONAL | string) => createUrl(region),
	createUrl: (region: REGIONAL | PLATFORM | string) => createUrl(region),
}

export default API;