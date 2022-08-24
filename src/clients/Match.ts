import {REGIONAL} from "../util/apiUrl";
import {IMatch} from "../@types/match";
import BaseClient from "./BaseClient";

class Match extends BaseClient {
	private readonly endpoint: string;

	constructor(apiKey: string | undefined) {
		super(apiKey);
		this.endpoint = "/lol/match/v5/matches"
	}

	async idsByPuuid(puuid: string, region: REGIONAL | string = "europe"): Promise<string[]> {
		const endpoint = `${this.endpoint}/by-puuid/${puuid}/ids`;
		return await this.get<string[]>(region, endpoint);
	}

	async byMatchId(matchId: string, region: REGIONAL | string = "europe"): Promise<IMatch> {
		const endpoint = `${this.endpoint}/${matchId}`;
		return await this.get<IMatch>(region, endpoint);
	}

	//TODO: Add type definitions
	async timelineByMatchId(matchId: string, region: REGIONAL | string = "europe"): Promise<any> {
		const endpoint = `${this.endpoint}/${matchId}/timeline`;
		return await this.get<any>(region, endpoint);
	}
}

export default Match;