import reksai from "../src";

describe("Reksai champion", () => {
	it("get champion name", async() => {
		const ahri = await reksai.ddragon.champion.get("Ahri");
		expect(ahri.name).toBe("Ahri");
	});
});