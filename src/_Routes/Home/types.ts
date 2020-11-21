export interface IGame {
  id: string;
  title: string;
  game: string;
  date: string;
  players: IPlayers;
  contact: string;
  description: string;
}

export interface IGameForm {
  title: string;
  game: string;
  date?: Date;
  maxPlayers?: number;
  contact: string;
  description: string;
}

export interface IPlayers {
  maxPlayers: number;
  players: number;
}
