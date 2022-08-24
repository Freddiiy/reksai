import {PLATFORM, REGIONAL} from "../util/apiUrl";
import API from "../util/apiUrl";
import {typeFetch} from "../util/typeFetch";

/**
 * @BaseClient is the parent class of all clients that needs an api key.
 */
class BaseClient {
	private _apiKey: string | undefined

	constructor(apiKey: string | undefined) {
		this._apiKey = handleApiKey(apiKey);
	}

	async get<T>(region: REGIONAL | PLATFORM | string, endpoint: string) {
		const url = `${API.createUrl(region)}${endpoint}`
		return await typeFetch<T>(url, this._apiKey);
	}

	get apiKey(): string | undefined {
		return this._apiKey;
	}

	set apiKey(value: string | undefined) {
		this._apiKey = value;
	}
}

function handleApiKey(key?: string) {
	if (key === undefined || key === "") {
		key = process.env.RIOT_API_KEY;
	}
	if (key === undefined || key === "") {
		console.error("Could not initialize the Reksai protected client. The Api key has to be a non-empty string");
		return key;
	}

	return key;
}



export default BaseClient;