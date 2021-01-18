export interface IGame {
  id: string;
  gamerId?: string;
  title: string;
  gameName: string;
  creationDate: string;
  date: string;
  players: IPlayers;
  contact: string;
  description: string;
}

export interface IGameForm {
  title: string;
  gameName: string;
  date?: string;
  maxPlayers?: number;
  contact: string;
  description: string;
}

export interface IPlayers {
  maxPlayers: number;
  players: number;
}
