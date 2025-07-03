const express = require('express');
const mongoose = require('mongoose');
const Player = require('./models/Player');
const GameSession = require('./models/GameSession');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/gameDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Game Mechanics
// Store current game state
let currentGameSession = {
  players: [],
  winningNumber: 0,
  isActive: true
};

// Endpoint to join the game (players pick a random number 1-10)
app.post('/join', async (req, res) => {
  const { userId, name } = req.body;

  if (!userId || !name) {
    return res.status(400).json({ message: 'User ID and name are required.' });
  }

  // Player picks a random number between 1 and 10
  const selectedNumber = Math.floor(Math.random() * 10) + 1;

  const player = { userId, name, selectedNumber };

  // Add player to current game session
  currentGameSession.players.push(player);

  // Save player in the database if they don't exist
  const existingPlayer = await Player.findOne({ userId });
  if (!existingPlayer) {
    const newPlayer = new Player({ userId, name });
    await newPlayer.save();
  }

  res.status(200).json({ message: 'Player joined the game', player });
});

// Endpoint to end the session and select the winning number
app.post('/end-session', async (req, res) => {
  if (!currentGameSession.isActive) {
    return res.status(400).json({ message: 'Game session is not active.' });
  }

  // Randomly choose the winning number (1-10)
  currentGameSession.winningNumber = Math.floor(Math.random() * 10) + 1;

  // Determine winners
  currentGameSession.players.forEach(player => {
    player.isWinner = player.selectedNumber === currentGameSession.winningNumber;
    if (player.isWinner) {
      // Update player wins in the database
      Player.findOneAndUpdate(
        { userId: player.userId },
        { $inc: { wins: 1 } },
        { new: true }
      );
    }
  });

  // Store the session in the database
  const gameSession = new GameSession({
    winningNumber: currentGameSession.winningNumber,
    players: currentGameSession.players
  });

  await gameSession.save();

  // Reset current session for a new game
  currentGameSession = { players: [], winningNumber: 0, isActive: false };

  res.status(200).json({ message: 'Session ended', winningNumber: currentGameSession.winningNumber });
});

// Endpoint to fetch the top 10 players sorted by wins
app.get('/top-players', async (req, res) => {
  const topPlayers = await Player.find().sort({ wins: -1 }).limit(10);
  res.status(200).json(topPlayers);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
