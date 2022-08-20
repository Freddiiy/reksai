import {typeFetch} from "../util/typeFetch";
import API, {REGIONAL} from "../util/apiUrl";
import {IMatch} from "../@types/match";

class Match extends BaseClient {
	private readonly endpoint: string;

	constructor(apiKey: string | undefined) {
		super(apiKey);
		this.endpoint = "/lol/match/v5/matches"
	}

	async idsByPuuid(puuid: string, region: REGIONAL | string = "europe"): Promise<string[]> {
		const url = `${API.regional(region)}${this.endpoint}/by-puuid/${puuid}/ids`;
		return await typeFetch<string[]>(url, this.apiKey);
	}

	async byMatchId(matchId: string, region: REGIONAL | string = "europe"): Promise<IMatch> {
		const url = `${API.regional(region)}${this.endpoint}/${matchId}`;
		return await typeFetch<IMatch>(url, this.apiKey);
	}

	//TODO: Add type definitions
	async timelineByMatchId(matchId: string, region: REGIONAL | string = "europe"): Promise<any> {
		const url = `${API.regional(region)}${this.endpoint}/${matchId}/timeline`;
		return await typeFetch<Match>(url, this.apiKey);
	}
}

export default Match;