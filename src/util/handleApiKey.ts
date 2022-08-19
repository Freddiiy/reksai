export default function handleApiKey(key?: string) {
	if (key === undefined || key === "") {
		key = process.env.RIOT_API_KEY;
	}
	if (key === undefined || key === "") {
		throw new Error("Could not initialize Reksai. The Api key has to be a non-empty string")
	}

	return key;
}
