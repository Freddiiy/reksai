import DDragonEndpoints from "./DDragonEndpoints";
import DDragonVersions from "./DDragonVersions";
import {capitalize} from "../../util/utils";

/**
 * Functions in this class returns a string that is a url to DataDragons assets
 */


class DDragonAssets {
	constructor() {
	}

	async championSplash(name: string) {
		const capitalized = capitalize(name);
		return DDragonEndpoints.createUrl(`/cdn/img/champion/splash/${capitalized}_0.jpg`);
	}

	async championLoadingScreen(name: string) {
		const capitalized = capitalize(name);
		return DDragonEndpoints.createUrl(`/cdn/img/champion/loading/${capitalized}_0.jpg`);
	}

	async champion(name: string) {
		if (!name.includes(".png")) {
			name = `${name}.png`;
		}
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEndpoints.createUrl(`/cdn/${latest}/img/champion/${name}`);
	}

	async championPassive(passiveName: string) {
		if (!passiveName.includes(".png")) {
			passiveName = `${passiveName}.png`;
		}
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEndpoints.createUrl(`/cdn/${latest}/img/passive/${passiveName}`);
	}

	async championAbility(abilityName: string) {
		if (!abilityName.includes(".png")) {
			abilityName = `${abilityName}.png`;
		}
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEndpoints.createUrl(`/cdn/${latest}/img/spell/${abilityName}`);
	}

	async item(itemId: string) {
		if (!itemId.includes(".png")) {
			itemId = `${itemId}.png`;
		}
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEndpoints.createUrl(`/cdn/${latest}/${itemId}`);
	}

	async summonerSpell(spellName: string) {
		if (!spellName.includes(".png")) {
			spellName = `${spellName}.png`;
		}
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEndpoints.createUrl(`/cdn/${latest}/img/spell/${spellName}`);
	}

	async profileIcon(iconId: string | number) {
		if (typeof iconId === "number") {
			iconId = iconId.toString();
		}

		if (!iconId.includes(".png")) {
			iconId = `${iconId}.png`;
		}
		const latest = await DDragonVersions.getLatestVersion();
		return DDragonEndpoints.createUrl(`/cdn/${latest}/img/profileicon/${iconId}`);
	}
}

export default DDragonAssets