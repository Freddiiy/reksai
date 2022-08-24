import {Region} from "../../@types/region";
import DDragonChampion from "./DDragonChampion";
import DDragonVersions from "./DDragonVersions";
import DDragonItem from "./DDragonItem";
import DDragonEndpoints from "./DDragonEndpoints";
import DDragonAssets from "./DDragonAssets";
import {typeFetch} from "../../util/typeFetch";



/**
 * @DDragon is (now and for the time being) a seperate class for itself until I figure out a way to
 * merge it with the API-key dependent classes on Reksai.
 * It is meant to be used in the browser where I don't want there to be api keys leaking out and
 * I couldnt find a maintainable way of splitting it up easily.
 */

//TODO: Make the rest of DDragons endpoints.
class DDragon {
	public champion: DDragonChampion;
	public versions: DDragonVersions;
	public item: DDragonItem;
	public asset: DDragonAssets;
	constructor() {
		this.champion = new DDragonChampion();
		this.versions = new DDragonVersions();
		this.item = new DDragonItem();
		this.asset = new DDragonAssets();
	}

	async getRegion(region: string) {
		const url = DDragonEndpoints.createUrl(`/realms/${region}.json`)
		return await typeFetch<Region>(url)
	}

	async getLanguages(): Promise<string[]> {
		const url = DDragonEndpoints.createUrl(`/cdn/languages.json`)
		return await typeFetch<string[]>(url)
	}

}

export default DDragon;
