import { getRandomNumber } from "../helpers/index.js";

export const data = {
  users: [ { username: "", id: 0, gamesPlayed: 0, gamesWon: 0, gamesLose: 0 } ],
  game: [ { id: 0, winningNumber: 0, isActive: false, players: [], winner: [] } ],
}