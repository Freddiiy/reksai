import {ChampionResponse} from "../util/types";
import ddragon from "../datastores/ddragon";

export function getChampion(name: string): ChampionResponse {
	const champ = ddragon.getChampion(name);
	return champ;
}