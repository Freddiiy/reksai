import {typeFetch} from "../util/typeFetch";
import {ISummoner} from "../@types/summoner";
import API, {PLATFORM} from "../util/apiUrl";
import BaseClient from "./BaseClient";

class Summoner extends BaseClient {
	private readonly endpoint: string;

	constructor(apiKey: string | undefined) {
		super(apiKey);
		this.endpoint = "/lol/summoner/v4/summoners"
	}

	async byAccount(encrypyedAccountId: string, region: PLATFORM | string = "euw1"): Promise<ISummoner> {
		const url = `${API.platform(region)}${this.endpoint}/by-account/${encrypyedAccountId}`
		return await typeFetch<ISummoner>(url, this.apiKey);
	}

	async bySummonerName(summonerName: string, region: PLATFORM | string = "euw1"): Promise<ISummoner> {
		const url = `${API.platform(region)}${this.endpoint}/by-name/${summonerName}`
		console.log(url);
		return await typeFetch<ISummoner>(url, this.apiKey);
	}

	async byPuuid(encrypedPuuid: string, region: PLATFORM | string = "euw1"): Promise<ISummoner> {
		const url = `${API.platform(region)}${this.endpoint}/by-puuid/${encrypedPuuid}`
		return await typeFetch<ISummoner>(url, this.apiKey);
	}
}

export default Summoner