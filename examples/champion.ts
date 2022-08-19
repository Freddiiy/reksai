import Reksai from "../src";

const reksai = new Reksai("your-api-key");
const main = async() => {
	const ekko = await reksai.ddragon.champion.get("Ekko"); //Typesafe Ekko object
	const ekkoImage = await reksai.ddragon.asset.champion(ekko.image.full) //Get ekko image url returned
}
main();