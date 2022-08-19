import {capitalize} from "../../util/utils";
import {typeFetch} from "../../util/typeFetch";
import {IChampion} from "../../@types/champion";
import {ChampionResponse} from "../../@types/champion";
import DDragonEnpoints from "./DDragonEndpoints";
import DDragonVersions from "./DDragonVersions";

class DDragonChampion {

	constructor() {
	}

	async get(name: string): Promise<IChampion> {
		const capitalizedName = capitalize(name);
		const latest = await DDragonVersions.getLatestVersion();
		console.log(latest);
		const url = DDragonEnpoints.createUrl(`/cdn/${latest}/data/en_US/champion/${capitalizedName}.json`);
		console.log(url);
		const champ = await typeFetch<ChampionResponse>(url);
		return champ.data[capitalizedName];
	}

	//TODO: Make champion resume type
	async getAll(): Promise<any> {
		const latest = await DDragonVersions.getLatestVersion();
		const url = DDragonEnpoints.createUrl(`/cdn/${latest}/data/en_US/champion.json`);
		return await typeFetch<any>(url);
	}

	/**
	 * All of the function down below is only to return the static image url so it can be easily used in the frontend.
	 * It is possible to get the name of the asset from using @get.
	 * @param name
	 */

	async splashScreenAsset(name: string): Promise<string> {
		return DDragonEnpoints.createUrl(`/cdn/img/champion/splash/${name}_0.jpg`);
	}

	async loadingScreenAsset(name: string): Promise<string> {
		return DDragonEnpoints.createUrl(`/cdn/img/champion/loading/${name}.png`);
	}

	async squareAsset(name: string): Promise<string> {
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEnpoints.createUrl(`/cdn/${latest}/img/champion/${name}.png`);
	}

	async passiveAsset(name: string): Promise<string> {
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEnpoints.createUrl(`/cdn/${latest}/img/passive/${name}.png`);
	}

	async abilityAsset(name: string): Promise<string> {
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEnpoints.createUrl(`/cdn/${latest}/img/spell/${name}.png`)
	}
}

export default DDragonChampion;