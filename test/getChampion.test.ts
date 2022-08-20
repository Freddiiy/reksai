import Reksai from "../dist";

describe("Reksai DDragon", () => {
	let reksai: Reksai;

	beforeAll(() => {
		reksai = new Reksai();
	})

	it("get champion name", async() => {
		const ahri = await reksai.ddragon.champion.get("Ahri");
		expect(ahri.name).toBe("Ahri");
	});
});