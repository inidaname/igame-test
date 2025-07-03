"use client";

import React, { useEffect, useState } from "react";

import { NextPage } from "next";

import FormField from "@/components/form-field";
import router from "next/router";
import PickNumberForm from "@/components/forms/pick-number-form";

const Page: NextPage = () => {
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    if (countdown < 0) {
      setCountdown(7);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [countdown]);

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start space-y-6">
      <header className="w-full flex flex-col items-end justify-center p-5">
        <p>Countdown Time</p>
        <p className="center">{countdown}</p>
      </header>
      <section className="flex flex-col justify-center items-center w-full flex-1 space-y-2">
        <PickNumberForm />
        <div className="flex flex-col justify-end items-center w-full flex-2 pb-14">
          <p className="mt-6">13 users joined</p>
        </div>
      </section>
    </main>
  );
};

export default Page;
