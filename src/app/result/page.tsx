import React from "react";

import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main className="w-full min-h-screen flex md:flex-row flex-col justify-start items-stretch">
      <section className="flex-1 flex flex-col justify-center items-center">
        <div className="grow flex flex-col justify-center">
          <p>Result</p>
          <p>7</p>
        </div>
        <div className="grow-2 ">
          <p>Total players: 12</p>
          <p>Total wins: 2</p>
        </div>
        <div className="grow-2 ">
          <p>New sessions start in 7sec</p>
        </div>
      </section>
      <aside className="md:w-1/3 w-full flex flex-col justify-center items-start">
        <p>inidaname</p>
      </aside>
    </main>
  );
};

export default Page;
