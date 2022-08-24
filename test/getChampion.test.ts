import {IChampion} from "../src/@types/champion";
import {ddragon} from "../src";

describe("Reksai DDragon", () => {
	let ahri: IChampion;
	beforeAll(async() => {
		ahri = await ddragon.champion.get("Ahri");
	})

	it("Get champion name", () => {
		expect(ahri.name).toBe("Ahri");
	});
});