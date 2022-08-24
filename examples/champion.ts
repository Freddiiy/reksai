import {ddragon} from "../src";

const main = async() => {
	const ekko = await ddragon.champion.get("eKKo"); //Typesafe Ekko object
	const ekkoImage = await ddragon.asset.champion(ekko.image.full)	//Get ekko image url returned

	console.log(ekko.name); //returns Ekko.
	console.log(ekkoImage) // Returns url for ekkos image

}
main();