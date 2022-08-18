import {Champion} from "./util/types";
import ddragon from "./datastores/ddragon";


class Reksai {
	constructor() {
	}

	async getChampion(name: string): Promise<Champion> {
		return await ddragon.getChampion(name);
	}
}

const reksai = new Reksai();
export default reksai