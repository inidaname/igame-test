"use client";

import React, { useContext } from "react";

import { UserContext } from "@/provider";

const HomeHeader: React.FC = () => {
  const {
    userData: { user },
  } = useContext(UserContext);

  return (
    <header className="w-full flex flex-row items-center justify-end p-5">
      <p>Hi {user?.username}</p>
    </header>
  );
};

export default HomeHeader;
