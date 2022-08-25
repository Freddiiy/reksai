import Reksai from "../src";
import * as dotenv from "dotenv";
dotenv.config();


const reksai = new Reksai(process.env.RIOT_API_KEY);
const main = async() => {
	const summoner = await reksai.summoner.bySummonerName("Thiccikyu"); //Get typesafe// summoner object back
	const summonerName = summoner.name;
	const summonerLevel = summoner.summonerLevel;

	console.log(summonerName);
	console.log(summonerLevel)

	const bean = await reksai.summoner.bySummonerName("Bønne", "eun1"); //Get typesafe// summoner object back
	console.log(bean.name + bean.summonerLevel);
}
main();