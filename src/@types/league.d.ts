export interface ILeagueEntry {
	leagueID:     string;
	queueType:    string;
	tier:         string;
	rank:         string;
	summonerID:   string;
	summonerName: string;
	leaguePoints: number;
	wins:         number;
	losses:       number;
	veteran:      boolean;
	inactive:     boolean;
	freshBlood:   boolean;
	hotStreak:    boolean;
}

export interface ILeague {
	tier:     string;
	leagueID: string;
	queue:    string;
	name:     string;
	entries:  Entry[];
}

export interface Entry {
	summonerID:   string;
	summonerName: string;
	leaguePoints: number;
	rank:         Rank;
	wins:         number;
	losses:       number;
	veteran:      boolean;
	inactive:     boolean;
	freshBlood:   boolean;
	hotStreak:    boolean;
}

export enum Rank {
	I = "I",
}



