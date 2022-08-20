import DDragon from "./clients/ddragon/DDragon";
import Summoner from "./clients/Summoner";
import Match from "./clients/Match";

class Reksai {
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
		this.ddragon = new DDragon();
		this.summoner = new Summoner(riotApiKey);
		this.match = new Match(riotApiKey);
	}
}

export default Reksai