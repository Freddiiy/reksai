export interface IMatch {
	metadata: Metadata;
	info:     Info;
}

export interface Info {
	gameCreation:       number;
	gameDuration:       number;
	gameEndTimestamp:   number;
	gameId:             number;
	gameMode:           string;
	gameName:           string;
	gameStartTimestamp: number;
	gameType:           string;
	gameVersion:        string;
	mapId:              number;
	participants:       Participant[];
	platformId:         string;
	queueId:            number;
	teams:              Team[];
	tournamentCode:     string;
}

export interface Participant {
	assists:                        number;
	baronKills:                     number;
	basicPings:                     number;
	bountyLevel:                    number;
	challenges:                     { [key: string]: number };
	champExperience:                number;
	champLevel:                     number;
	championId:                     number;
	championName:                   string;
	championTransform:              number;
	consumablesPurchased:           number;
	damageDealtToBuildings:         number;
	damageDealtToObjectives:        number;
	damageDealtToTurrets:           number;
	damageSelfMitigated:            number;
	deaths:                         number;
	detectorWardsPlaced:            number;
	doubleKills:                    number;
	dragonKills:                    number;
	eligibleForProgression:         boolean;
	firstBloodAssist:               boolean;
	firstBloodKill:                 boolean;
	firstTowerAssist:               boolean;
	firstTowerKill:                 boolean;
	gameEndedInEarlySurrender:      boolean;
	gameEndedInSurrender:           boolean;
	goldEarned:                     number;
	goldSpent:                      number;
	individualPosition:             string;
	inhibitorKills:                 number;
	inhibitorTakedowns:             number;
	inhibitorsLost:                 number;
	item0:                          number;
	item1:                          number;
	item2:                          number;
	item3:                          number;
	item4:                          number;
	item5:                          number;
	item6:                          number;
	itemsPurchased:                 number;
	killingSprees:                  number;
	kills:                          number;
	lane:                           string;
	largestCriticalStrike:          number;
	largestKillingSpree:            number;
	largestMultiKill:               number;
	longestTimeSpentLiving:         number;
	magicDamageDealt:               number;
	magicDamageDealtToChampions:    number;
	magicDamageTaken:               number;
	neutralMinionsKilled:           number;
	nexusKills:                     number;
	nexusLost:                      number;
	nexusTakedowns:                 number;
	objectivesStolen:               number;
	objectivesStolenAssists:        number;
	participantId:                  number;
	pentaKills:                     number;
	perks:                          Perks;
	physicalDamageDealt:            number;
	physicalDamageDealtToChampions: number;
	physicalDamageTaken:            number;
	profileIcon:                    number;
	puuid:                          string;
	quadraKills:                    number;
	riotIdName:                     string;
	riotIdTagline:                  string;
	role:                           string;
	sightWardsBoughtInGame:         number;
	spell1Casts:                    number;
	spell2Casts:                    number;
	spell3Casts:                    number;
	spell4Casts:                    number;
	summoner1Casts:                 number;
	summoner1Id:                    number;
	summoner2Casts:                 number;
	summoner2Id:                    number;
	summonerId:                     string;
	summonerLevel:                  number;
	summonerName:                   string;
	teamEarlySurrendered:           boolean;
	teamId:                         number;
	teamPosition:                   string;
	timeCCingOthers:                number;
	timePlayed:                     number;
	totalDamageDealt:               number;
	totalDamageDealtToChampions:    number;
	totalDamageShieldedOnTeammates: number;
	totalDamageTaken:               number;
	totalHeal:                      number;
	totalHealsOnTeammates:          number;
	totalMinionsKilled:             number;
	totalTimeCCDealt:               number;
	totalTimeSpentDead:             number;
	totalUnitsHealed:               number;
	tripleKills:                    number;
	trueDamageDealt:                number;
	trueDamageDealtToChampions:     number;
	trueDamageTaken:                number;
	turretKills:                    number;
	turretTakedowns:                number;
	turretsLost:                    number;
	unrealKills:                    number;
	visionScore:                    number;
	visionWardsBoughtInGame:        number;
	wardsKilled:                    number;
	wardsPlaced:                    number;
	win:                            boolean;
}

export interface Perks {
	statPerks: StatPerks;
	styles:    Style[];
}

export interface StatPerks {
	defense: number;
	flex:    number;
	offense: number;
}

export interface Style {
	description: Description;
	selections:  Selection[];
	style:       number;
}

export enum Description {
	PrimaryStyle = "primaryStyle",
	SubStyle = "subStyle",
}

export interface Selection {
	perk: number;
	var1: number;
	var2: number;
	var3: number;
}

export interface Team {
	bans:       Ban[];
	objectives: Objectives;
	teamId:     number;
	win:        boolean;
}

export interface Ban {
	championId: number;
	pickTurn:   number;
}

export interface Objectives {
	baron:      Baron;
	champion:   Baron;
	dragon:     Baron;
	inhibitor:  Baron;
	riftHerald: Baron;
	tower:      Baron;
}

export interface Baron {
	first: boolean;
	kills: number;
}

export interface Metadata {
	dataVersion:  string;
	matchId:      string;
	participants: string[];
}
