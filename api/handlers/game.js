import { data } from "../data/index.js";
import { getRandomNumber } from "../helpers/index.js";

export function JoinGame(req, res) {
  const { userId } = req.user;
  const { selectedNumber } = req.body;

  let joinGame = data.game.find(game => game.isActive);

  if (!joinGame) {
    joinGame = {
      id: data.game.length + 1,
      winningNumber: getRandomNumber(),
      players: [],
      isActive: true,
      winner: []
    };
    data.game.push(joinGame);
  }

  if (!joinGame.players.includes(userId)) {
    joinGame.players.push(userId);
  }

  const isWinner = joinGame.winningNumber === selectedNumber;

  const user = data.users.find(user => user.id === userId);

  if (user) {
    user.gamesPlayed += 1;
    if (isWinner) {
      joinGame.winner.push(userId);
      user.gamesWon += 1;
    } else {
      user.gamesLose += 1;
    }
  }

  const playersInfo = data.users.filter(u => joinGame.players.includes(u.id));
  const winnerInfo = data.users.filter(u => joinGame.winner.includes(u.id));

  data.game = data.game.map(game =>
    game.id === joinGame.id ? { ...joinGame } : game
  );

  data.users = data.users.map(game =>
    game.id === user.id ? { ...user } : game
  );


  res.status(201).json({
    data: { ...joinGame, players: playersInfo, winner: winnerInfo },
    message: "Player joined the game successfully!",
  });
}


export function GetGame(req, res) {
  const { userId } = req.user
  const { gameId } = req.params;
  const gamePlayed = data.game.find(game => game.id === Number(gameId));

  if (!gamePlayed) {
    return res.status(404).json({ message: 'Game not found!' });
  }

  res.status(200).json({
    message: "Game data fetched successfully",
    data: {
      isWinner: gamePlayed.winner.includes(userId),
      otherWinners: gamePlayed.winner,
      players: gamePlayed.players,
      winningNumber: gamePlayed.winningNumber,
    }
  });
}

export function GetActiveGame(req, res) {
  const activeGame = data.game.find(game => game.isActive)

  if (!activeGame) {
    res.status(400).json({ message: "No active game currently" })
  }

  res.status(200).json({ message: "Current Active game", data: { players: activeGame.players.length } })
}

export function EndGames(req, res) {
  const { gameId } = req.body;

  if (!gameId) {
    return res.status(400).json({ message: "Game ID is required!" });
  }

  const game = data.game.find(game => game.id === Number(gameId));

  if (!game) {
    return res.status(404).json({ message: "Game not found!" });
  }

  if (!game.isActive) {
    return res.status(400).json({ message: "Game has already ended!" });
  }

  game.isActive = false;

  res.status(200).json({ message: "Game has been successfully ended.", data: game });
}
