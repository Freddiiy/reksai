class BaseClient {
	private _apiKey: string

	constructor(apiKey: string | undefined) {
		this._apiKey = handleApiKey(apiKey);
	}

	get apiKey(): string {
		return this._apiKey;
	}

	set apiKey(value: string) {
		this._apiKey = value;
	}
}

function handleApiKey(key?: string) {
	if (key === undefined || key === "") {
		key = process.env.RIOT_API_KEY;
	}
	if (key === undefined || key === "") {
		throw new Error("Could not initialize the Reksai protected client. The Api key has to be a non-empty string")
	}

	return key;
}

export default BaseClient;