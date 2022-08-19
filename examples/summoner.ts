import Reksai from "../src";

const reksai = new Reksai("your-api-key");
const main = async() => {
	const summoner = await reksai.summoner.bySummonerName("Thiccikyu"); //Get typesafe// summoner object back
	const summonerName = summoner.name;
	const summonerLevel = summoner.summonerLevel;
}
main();