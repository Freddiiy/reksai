# Reksai

A typescript Node wrapper for the League of Legends api.

## Eksamples.
### DDragon wrapper.
```js
import reksai from "reksai";

const reksai = new Reksai();
const main = async() => {
	const ekko = await reksai.ddragon.champion.get("eKKo"); //Typesafe Ekko object
	const ekkoImage = await reksai.ddragon.asset.champion(ekko.image.full)	//Get ekko image url returned

	console.log(ekko.name); //returns Ekko.
	console.log(ekkoImage) // Returns url for ekkos image

}
main();
```

### Summoner client
```js
import reksai from "reksai";

const reksai = new Reksai("your-api-key");
const main = async() => {
    const summoner = await reksai.summoner.bySummonerName("Thiccikyu"); //Get typesafe// summoner object back
    const summonerName = summoner.name;
    const summonerLevel = summoner.summonerLevel;

    console.log(summonerName);
    console.log(summonerLevel)
}
main();
```

### Match client
```js
import reksai from "reksai";

const reksai = new Reksai(process.env.RIOT_API_KEY);
const main = async() => {
    const summoner = await reksai.summoner.bySummonerName("Thiccikyu", "euw1");
    console.log(summoner.name + " " + summoner.summonerLevel);
    const matchIds = await reksai.match.idsByPuuid(summoner.puuid, "europe");
    console.log(matchIds);
}
main();
```