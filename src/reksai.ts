import DDragon from "./clients/ddragon/DDragon";
import Summoner from "./clients/Summoner";
import handleApiKey from "./util/handleApiKey";
import Match from "./clients/Match";

class Reksai {
	private readonly key: string;
	public ddragon: DDragon;
	public summoner: Summoner;
	public match: Match;

	/**
	 * @param riotApiKey
	 * This is set via the RIOT_API_KEY env variable or
	 * set manually when instantiating Reksai class.
	 *
	 * Will return an error if the key could not be read.
	 */
	constructor(riotApiKey?: string) {
		this.key = handleApiKey(riotApiKey);

		this.ddragon = new DDragon();
		this.summoner = new Summoner(this.key);
		this.match = new Match(this.key);
	}
}

export default Reksai