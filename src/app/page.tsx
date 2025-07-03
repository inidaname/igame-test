import React from "react";

import { NextPage } from "next";

import HomeHeader from "@/components/layout/home-header";
import UserSection from "@/components/layout/user-section";

const Page: NextPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start space-y-6">
      <HomeHeader />
      <UserSection />
    </main>
  );
};

export default Page;
