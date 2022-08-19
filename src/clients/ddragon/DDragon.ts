import {typeFetch} from "../../util/typeFetch";
import {Region} from "../../@types/region";
import DDragonChampion from "./DDragonChampion";
import DDragonVersions from "./DDragonVersions";
import DDragonItem from "./DDragonItem";
import DDragonEndpoints from "./DDragonEndpoints";
import DDragonAssets from "./DDragonAssets";


//TODO: Make the rest of DDragons endpoints.
class DDragon {
	public champion;
	public versions;
	public item;
	public asset;
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
