"use client";
import React, { createContext, useState } from "react";

interface UserData {
  username: string;
  id: number;
  gamesPlayed: number;
  gamesWon: number;
  gamesLose: number;
}

interface GameData {
  id: number;
  isActive: boolean;
  players: UserData[];
  winner: UserData[];
  winningNumber: number;
}

interface ContextData {
  userData: {
    user: UserData | null;
    setUserData: (userData: UserData) => void;
    clearDetail: () => void;
  };
  gameData: {
    game: GameData | null;
    setGameData: (gameData: GameData) => void;
    clearGameData: () => void;
  };
}
export const UserContext = createContext<ContextData>({
  userData: {
    clearDetail: () => {},
    setUserData: (str) => {
      str;
    },
    user: null,
  },
  gameData: {
    clearGameData: () => {},
    game: null,
    setGameData: (str) => {
      str;
    },
  },
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [game, setGame] = useState<GameData | null>(null);
  const setUserData = (userData: UserData) => {
    setUser(userData);
  };

  const clearDetail = () => {
    setUser(null);
  };
  const setGameData = (gameData: GameData) => {
    setGame(gameData);
  };

  const clearGameData = () => {
    setGame(null);
  };
  return (
    <UserContext.Provider
      value={{
        userData: { user, setUserData, clearDetail },
        gameData: { clearGameData, game, setGameData },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
