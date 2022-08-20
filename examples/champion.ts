import Reksai from "../src";

const reksai = new Reksai();
const main = async() => {
	const ekko = await reksai.ddragon.champion.get("eKKo"); //Typesafe Ekko object
	const ekkoImage = await reksai.ddragon.asset.champion(ekko.image.full)	//Get ekko image url returned

	console.log(ekko.name); //returns Ekko.
	console.log(ekkoImage) // Returns url for ekkos image

}
main();