import {typeFetch} from "../util/typeFetch";
import {ISummoner} from "../@types/summoner";
import apiUrl from "../util/apiUrl";

class Summoner {
	private endpoint: string;
	private apiKey: string;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.endpoint = "lol/summoner/v4/summoners"
	}

	//TODO: Add regional support asap
	async byAccount(encrypyedAccountId: string): Promise<ISummoner> {
		return await typeFetch<ISummoner>(`${apiUrl.EUW}/${this.endpoint}/by-account/${encrypyedAccountId}`,this.apiKey);
	}

	async bySummonerName(summonerName: string): Promise<ISummoner> {
		console.log(`${apiUrl.EUW}/${this.endpoint}/by-name/${summonerName}`);
		return await typeFetch<ISummoner>(`${apiUrl.EUW}/${this.endpoint}/by-name/${summonerName}`,this.apiKey);
	}

	async byPuuid(encrypedPuuid: string): Promise<ISummoner> {
		return await typeFetch<ISummoner>(`${apiUrl.EUW}/${this.endpoint}/by-puuid/${encrypedPuuid}`,this.apiKey);
	}
}

export default Summoner