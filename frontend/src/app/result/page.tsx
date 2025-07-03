"use client";

import React, { useContext, useMemo } from "react";

import { NextPage } from "next";
import { UserContext } from "@/provider";

const Page: NextPage = () => {
  const {
    gameData: { game },
  } = useContext(UserContext);

  const player = useMemo(
    () =>
      game?.players.map((played) => (
        <p key={`player${played.id}`}>{played.username}</p>
      )),
    [game?.players]
  );
  return (
    <main className="w-full min-h-screen flex md:flex-row flex-col justify-start items-stretch">
      <section className="flex-1 flex flex-col justify-center items-center">
        <div className="grow flex flex-col justify-center">
          <p>Result</p>
          <p>{game?.winningNumber}</p>
        </div>
        <div className="grow-2 ">
          <p>Total players: {game?.players.length}</p>
          <p>Total wins: {game?.winner.length}</p>
        </div>
      </section>
      <aside className="md:w-1/3 w-full flex flex-col justify-center items-start">
        {player}
      </aside>
    </main>
  );
};

export default Page;
