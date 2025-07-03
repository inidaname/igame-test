import React from "react";

import { NextPage } from "next";

import Button from "@/components/button";

const Page: NextPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start space-y-6">
      <header className="w-full flex flex-row items-center justify-end p-5">
        <p>Hi Jane</p>
      </header>
      <section className="flex flex-col justify-center items-center w-full flex-1 space-y-8">
        <div>
          <p>Total Wins: 4</p>
          <p>Total Loses: 5</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Button>Join</Button>
          <p>there is an active game session, you can join in 7s</p>
        </div>
      </section>
    </main>
  );
};

export default Page;
