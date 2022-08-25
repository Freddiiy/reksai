import Summoner from "./clients/Summoner";
import Match from "./clients/Match";
import League from "./clients/League";

class Reksai {
	public summoner: Summoner;
	public match: Match;
	public league: League;

	/**
	 * @param riotApiKey
	 * This is set via the RIOT_API_KEY env variable or
	 * set manually when instantiating Reksai class.
	 *
	 * Will return an error if the key could not be read.
	 */

	//TODO: Wanna use DDragon without apikey.
	constructor(riotApiKey?: string) {
		this.summoner = new Summoner(riotApiKey);
		this.match = new Match(riotApiKey);
		this.league = new League(riotApiKey);
	}
}

export default Reksai