import {typeFetch} from "../../util/typeFetch";
import DDragonEnpoints from "./DDragonEndpoints";

class DDragonVersions {
	constructor() {
	}

	static async getAllVersions(): Promise<string[]> {
		return await typeFetch<string[]>(DDragonEnpoints.createUrl("/api/versions.json"));
	}

	static async getLatestVersion(): Promise<string> {
		const data = await this.getAllVersions();
		return data[0]
	}
}
export default DDragonVersions;