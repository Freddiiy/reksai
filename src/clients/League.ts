import {PLATFORM, REGIONAL} from "../util/apiUrl";
import BaseClient from "./BaseClient";
import {ILeague, ILeagueEntry} from "../@types/league";

/**
 * @League endpoint
 * @param queue
 * Default queue value is RANKED_SOLO_5x5
 */

class League extends BaseClient {
	private readonly endpoint: string;

	constructor(apiKey?: string) {
		super(apiKey);
		this.endpoint = "/lol/league/v4"
	}

	//TODO: Types on all endpoints!!
	async byQueue(queue: ILeagueQueue | string = ILeagueQueue.RankedSolo5x5,
				  region: REGIONAL | string = REGIONAL.EUROPE): Promise<any> {
		const endpoint = `${this.endpoint}/challengerleagues/by-queue/${queue}`;
		return await this.get<any>(region, endpoint);
	}

	async entriesBySummonerId(encryptedSummonerId: string, region: PLATFORM | string = PLATFORM.EUW): Promise<ILeague> {
		const endpoint = `${this.endpoint}/entries/by-summoner/${encryptedSummonerId}`;
		return await this.get<any>(region, endpoint);
	}

	async entriesByQueueTierDivision(queue: ILeagueQueue | string = ILeagueQueue.RankedSolo5x5,
									 tier: string, division: string,
									 region: PLATFORM | string = PLATFORM.EUW): Promise<ILeagueEntry> {
		const endpoint = `${this.endpoint}/entries/${queue}/${tier}/${division}`;
		return await this.get<any>(region, endpoint);
	}

	async grandmasterLeaguesByQueue(queue: ILeagueQueue | string = ILeagueQueue.RankedSolo5x5,
									region: PLATFORM | string = PLATFORM.EUW): Promise<ILeague> {
		const endpoint = `${this.endpoint}/entries/grandmasterleagues/by-queue/${queue}`;
		return await this.get<any>(region, endpoint);
	}

	async byLeagueId(leagueId: string, region: PLATFORM | string = "euw1"): Promise<any> {
		const endpoint = `${this.endpoint}/leagues/${leagueId}`;
		return await this.get<any>(region, endpoint);
	}

	async masterleaguesByQueue(queue: ILeagueQueue | string = ILeagueQueue.RankedSolo5x5,
							   region: PLATFORM | string = PLATFORM.EUW): Promise<ILeague> {
		const endpoint = `${this.endpoint}/masterleagues/by-queue/${queue}`;
		return await this.get<any>(region, endpoint);
	}
}

export enum ILeagueQueue {
	RankedSolo5x5 = "RANKED_SOLO_5x5",
	RankedFlexSR = "RANKED_FLEX_SR",
	RankedFlexTT = "RANKED_FLEX_TT",
}

export default League;