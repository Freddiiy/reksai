import DDragonVersions from "./DDragonVersions";
import {IItem, ItemsResponse} from "../../@types/items";
import {typeFetch} from "../../util/typeFetch";
import DDragonEndpoints from "./DDragonEndpoints";

class DDragonItem {
	constructor() {
	}

	/**
	 * @function all()
	 * returns all of league of legends items.
	 */
	async all(): Promise<ItemsResponse> {
		const latest = await DDragonVersions.getLatestVersion();
		return await typeFetch<ItemsResponse>(DDragonEndpoints.createUrl(`/cdn/${latest}/data/en_US/item.json`));
	}

	async itemById(id: number): Promise<IItem> {
		const items = await this.all();
		return items.data[id]
	}
}

export default DDragonItem;