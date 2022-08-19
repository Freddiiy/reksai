import Reksai from "../src";

const reksai = new Reksai("RGAPI-f14e2073-cdeb-4fb3-8317-1d0158909c3e");
const main = async() => {
	const summoner = await reksai.summoner.bySummonerName("Thiccikyu"); //Get typesafe// summoner object back
	const summonerName = summoner.name;
	const summonerLevel = summoner.summonerLevel;

	console.log(summonerName);
	console.log(summonerLevel)
}
main();