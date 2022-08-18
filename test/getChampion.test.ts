import reksai from "../src";

describe("getChampion", () => {
	it("get champ", () => {
		expect(reksai.getChampion("ahri")).toEqual(data);
	})
})

const data = {
	"type": "champion",
	"format": "standAloneComplex",
	"version": "12.15.1",
	"data": {
		"Ahri": {
			"id": "Ahri",
			"key": "103",
			"name": "Ahri",
			"title": "the Nine-Tailed Fox",
			"image": {
				"full": "Ahri.png",
				"sprite": "champion0.png",
				"group": "champion",
				"x": 48,
				"y": 0,
				"w": 48,
				"h": 48
			},
			"skins": [
				{
					"id": "103000",
					"num": 0,
					"name": "default",
					"chromas": false
				},
				{
					"id": "103001",
					"num": 1,
					"name": "Dynasty Ahri",
					"chromas": true
				},
				{
					"id": "103002",
					"num": 2,
					"name": "Midnight Ahri",
					"chromas": true
				},
				{
					"id": "103003",
					"num": 3,
					"name": "Foxfire Ahri",
					"chromas": true
				},
				{
					"id": "103004",
					"num": 4,
					"name": "Popstar Ahri",
					"chromas": true
				},
				{
					"id": "103005",
					"num": 5,
					"name": "Challenger Ahri",
					"chromas": true
				},
				{
					"id": "103006",
					"num": 6,
					"name": "Academy Ahri",
					"chromas": true
				},
				{
					"id": "103007",
					"num": 7,
					"name": "Arcade Ahri",
					"chromas": true
				},
				{
					"id": "103014",
					"num": 14,
					"name": "Star Guardian Ahri",
					"chromas": true
				},
				{
					"id": "103015",
					"num": 15,
					"name": "K/DA Ahri",
					"chromas": true
				},
				{
					"id": "103016",
					"num": 16,
					"name": "Prestige K/DA Ahri",
					"chromas": false
				},
				{
					"id": "103017",
					"num": 17,
					"name": "Elderwood Ahri",
					"chromas": true
				},
				{
					"id": "103027",
					"num": 27,
					"name": "Spirit Blossom Ahri",
					"chromas": true
				},
				{
					"id": "103028",
					"num": 28,
					"name": "K/DA ALL OUT Ahri",
					"chromas": true
				},
				{
					"id": "103042",
					"num": 42,
					"name": "Coven Ahri",
					"chromas": true
				},
				{
					"id": "103065",
					"num": 65,
					"name": "Prestige K/DA Ahri (2022)",
					"chromas": false
				},
				{
					"id": "103066",
					"num": 66,
					"name": "Arcana Ahri",
					"chromas": true
				}
			],
			"lore": "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.",
			"blurb": "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature...",
			"allytips": [
				"Use Charm to set up your combos, it will make landing Orb of Deception and Fox-Fire dramatically easier.",
				"Initiate team fights using Charm, and chase down stragglers with Spirit Rush.",
				"Spirit Rush enables Ahri's abilities, it opens up paths for Charm, helps double hitting with Orb of Deception, and closes to make use of Fox-Fire."
			],
			"enemytips": [
				"Ahri's survivability is dramatically reduced when her Ultimate, Spirit Rush, is down.",
				"Stay behind minions to make Charm difficult to land, this will reduce Ahri's damage potential significantly."
			],
			"tags": [
				"Mage",
				"Assassin"
			],
			"partype": "Mana",
			"info": {
				"attack": 3,
				"defense": 4,
				"magic": 8,
				"difficulty": 5
			},
			"stats": {
				"hp": 570,
				"hpperlevel": 96,
				"mp": 418,
				"mpperlevel": 25,
				"movespeed": 330,
				"armor": 18,
				"armorperlevel": 4.7,
				"spellblock": 30,
				"spellblockperlevel": 1.3,
				"attackrange": 550,
				"hpregen": 2.5,
				"hpregenperlevel": 0.6,
				"mpregen": 8,
				"mpregenperlevel": 0.8,
				"crit": 0,
				"critperlevel": 0,
				"attackdamage": 53,
				"attackdamageperlevel": 3,
				"attackspeedperlevel": 2,
				"attackspeed": 0.668
			},
			"spells": [
				{
					"id": "AhriOrbofDeception",
					"name": "Orb of Deception",
					"description": "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. ",
					"tooltip": "Ahri throws then pulls back her orb, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> on the way out and <trueDamage>{{ totaldamage }} true damage</trueDamage> on the way back.{{ spellmodifierdescriptionappend }}",
					"leveltip": {
						"label": [
							"@AbilityResourceName@ Cost",
							"Damage"
						],
						"effect": [
							"{{ cost }} -> {{ costNL }}",
							"{{ basedamage }} -> {{ basedamageNL }}"
						]
					},
					"maxrank": 5,
					"cooldown": [
						7,
						7,
						7,
						7,
						7
					],
					"cooldownBurn": "7",
					"cost": [
						60,
						70,
						80,
						90,
						100
					],
					"costBurn": "60/70/80/90/100",
					"datavalues": {},
					"effect": [
						null,
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						]
					],
					"effectBurn": [
						null,
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0"
					],
					"vars": [],
					"costType": " {{ abilityresourcename }}",
					"maxammo": "-1",
					"range": [
						970,
						970,
						970,
						970,
						970
					],
					"rangeBurn": "970",
					"image": {
						"full": "AhriOrbofDeception.png",
						"sprite": "spell0.png",
						"group": "spell",
						"x": 0,
						"y": 96,
						"w": 48,
						"h": 48
					},
					"resource": "{{ cost }} {{ abilityresourcename }}"
				},
				{
					"id": "AhriFoxFire",
					"name": "Fox-Fire",
					"description": "Ahri gains a brief burst of Move Speed and releases three fox-fires, that lock onto and attack nearby enemies.",
					"tooltip": "Ahri releases 3 fox-fires that seek nearby enemies and deal <magicDamage>{{ singlefiredamage }} magic damage</magicDamage>, reduced to <magicDamage>{{ multifiredamage }} damage</magicDamage> beyond the first. She also gains <speed>{{ movementspeed*100 }}% Move Speed</speed> decaying over {{ movementspeedduration }} seconds.{{ spellmodifierdescriptionappend }}",
					"leveltip": {
						"label": [
							"Damage",
							"Cooldown"
						],
						"effect": [
							"{{ basedamage }} -> {{ basedamageNL }}",
							"{{ cooldown }} -> {{ cooldownNL }}"
						]
					},
					"maxrank": 5,
					"cooldown": [
						9,
						8,
						7,
						6,
						5
					],
					"cooldownBurn": "9/8/7/6/5",
					"cost": [
						30,
						30,
						30,
						30,
						30
					],
					"costBurn": "30",
					"datavalues": {},
					"effect": [
						null,
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						]
					],
					"effectBurn": [
						null,
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0"
					],
					"vars": [],
					"costType": " {{ abilityresourcename }}",
					"maxammo": "-1",
					"range": [
						700,
						700,
						700,
						700,
						700
					],
					"rangeBurn": "700",
					"image": {
						"full": "AhriFoxFire.png",
						"sprite": "spell0.png",
						"group": "spell",
						"x": 48,
						"y": 96,
						"w": 48,
						"h": 48
					},
					"resource": "{{ cost }} {{ abilityresourcename }}"
				},
				{
					"id": "AhriSeduce",
					"name": "Charm",
					"description": "Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her.",
					"tooltip": "Ahri blows a kiss that <status>Charms</status> the first enemy hit for {{ charmduration }} second(s) and deals <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}",
					"leveltip": {
						"label": [
							"Damage",
							"Duration"
						],
						"effect": [
							"{{ basedamage }} -> {{ basedamageNL }}",
							"{{ charmduration }} -> {{ charmdurationNL }}"
						]
					},
					"maxrank": 5,
					"cooldown": [
						14,
						14,
						14,
						14,
						14
					],
					"cooldownBurn": "14",
					"cost": [
						60,
						60,
						60,
						60,
						60
					],
					"costBurn": "60",
					"datavalues": {},
					"effect": [
						null,
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0,
							0
						]
					],
					"effectBurn": [
						null,
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0"
					],
					"vars": [],
					"costType": " {{ abilityresourcename }}",
					"maxammo": "-1",
					"range": [
						975,
						975,
						975,
						975,
						975
					],
					"rangeBurn": "975",
					"image": {
						"full": "AhriSeduce.png",
						"sprite": "spell0.png",
						"group": "spell",
						"x": 96,
						"y": 96,
						"w": 48,
						"h": 48
					},
					"resource": "{{ cost }} {{ abilityresourcename }}"
				},
				{
					"id": "AhriTumble",
					"name": "Spirit Rush",
					"description": "Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown, and gains additional recasts when taking down enemy champions.",
					"tooltip": "Ahri nimbly dashes, firing {{ rmaxtargetspercast }} essence bolts at nearby enemies, prioritizing champions. These bolts deal <magicDamage>{{ rcalculateddamage }} magic damage</magicDamage> each. Spirit Rush can be recast up to 2 more times within {{ rrecastwindow }} seconds.<br /><br />Consuming a champion's Essence with Essence Theft during this period extends the recast window by up to {{ pdurationextension }} seconds and grants an additional recast of Spirit Rush (up to {{ rmaxcasts }} stored).{{ spellmodifierdescriptionappend }}",
					"leveltip": {
						"label": [
							"Damage",
							"Cooldown"
						],
						"effect": [
							"{{ rbasedamage }} -> {{ rbasedamageNL }}",
							"{{ cooldown }} -> {{ cooldownNL }}"
						]
					},
					"maxrank": 3,
					"cooldown": [
						140,
						115,
						90
					],
					"cooldownBurn": "140/115/90",
					"cost": [
						100,
						100,
						100
					],
					"costBurn": "100",
					"datavalues": {},
					"effect": [
						null,
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						],
						[
							0,
							0,
							0
						]
					],
					"effectBurn": [
						null,
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0",
						"0"
					],
					"vars": [],
					"costType": " {{ abilityresourcename }}",
					"maxammo": "-1",
					"range": [
						450,
						450,
						450
					],
					"rangeBurn": "450",
					"image": {
						"full": "AhriTumble.png",
						"sprite": "spell0.png",
						"group": "spell",
						"x": 144,
						"y": 96,
						"w": 48,
						"h": 48
					},
					"resource": "{{ cost }} {{ abilityresourcename }}"
				}
			],
			"passive": {
				"name": "Essence Theft",
				"description": "After killing 9 minions or monsters, Ahri heals.<br>After taking down an enemy champion, Ahri heals for a greater amount.",
				"image": {
					"full": "Ahri_SoulEater2.png",
					"sprite": "passive0.png",
					"group": "passive",
					"x": 48,
					"y": 0,
					"w": 48,
					"h": 48
				}
			},
			"recommended": []
		}
	}
}