class BaseClient {
	private _apiKey: string | undefined

	constructor(apiKey: string | undefined) {
		this._apiKey = handleApiKey(apiKey);
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
		if (typeof window !== "undefined") return key;
		console.error("Could not initialize the Reksai protected client. The Api key has to be a non-empty string");
		return key;
	}

	return key;
}

export default BaseClient;