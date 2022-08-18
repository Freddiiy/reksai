import {typeFetch} from "../util/tfetch";
import {Champion, ChampionResponse} from "../util/types";
import {capitalize} from "../util/utils";

class Ddragon {
	private readonly host: string = "https://ddragon.leagueoflegends.com";

	constructor() {}

	async getChampion(name: string): Promise<Champion> {
		const lowerCaseName = name.toLowerCase();
		const capitalizedName = capitalize(lowerCaseName);

		const newestVersion = await this.getNewestVersion();
		const url = `${this.host}/cdn/${newestVersion}/data/en_US/champion/${capitalizedName}.json`;
		const champ = await typeFetch<ChampionResponse>(url);
		return champ.data[capitalizedName];
	}

	async getNewestVersion(): Promise<string> {
		const data = await typeFetch<string>(`${this.host}/api/versions.json`);
		return data[0]
	}
}


const ddragon = new Ddragon();
export default ddragon;
