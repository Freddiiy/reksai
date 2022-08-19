import Reksai from "./reksai";

const reksai = new Reksai("RGAPI-5ae17bd4-8c18-4d73-9baa-b4f0a38a58a9")

async function test() {
	const summoner = await reksai.summoner.bySummonerName("MAMMOTHMAN65");
	console.log(summoner);
}
test();
export default Reksai