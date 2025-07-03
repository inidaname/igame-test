"use client";

import React, { useContext } from "react";

import { UserContext } from "@/provider";
import JoinGame from "../join-game";

const UserSection: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="flex flex-col justify-center items-center w-full flex-1 space-y-8">
      <div>
        <p>Total Wins: {user?.gamesWon ?? 0}</p>
        <p>Total Played: {user?.gamesPlayed ?? 0}</p>
      </div>
      <JoinGame />
    </section>
  );
};

export default UserSection;
