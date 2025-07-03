import React from "react";

import { NextPage } from "next";

import FormField from "@/components/form-field";

const Page: NextPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start space-y-6">
      <header className="w-full flex flex-col items-end justify-center p-5">
        <p>Countdown Time</p>
        <p className="center">7</p>
      </header>
      <section className="flex flex-col justify-center items-center w-full flex-1 space-y-2">
        <div className="flex flex-col justify-center items-center w-full flex-1">
          <p>Pick a random number 1-9</p>
          <div className="w-1/4">
            <FormField />
          </div>
        </div>
        <div className="flex flex-col justify-end items-center w-full flex-2 pb-14">
          <p className="mt-6">13 users joined</p>
        </div>
      </section>
    </main>
  );
};

export default Page;
