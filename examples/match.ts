import Reksai from "../src";
import * as dotenv from 'dotenv'
dotenv.config();

const reksai = new Reksai(process.env.RIOT_API_KEY);
const main = async() => {
	const summoner = await reksai.summoner.bySummonerName("Thiccikyu", "euw1");
	console.log(summoner.name + " " + summoner.summonerLevel);
	const matchIds = await reksai.match.idsByPuuid(summoner.puuid, "europe");
	console.log(matchIds);
}
main();