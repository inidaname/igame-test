import React from "react";

import { NextPage } from "next";

import LoginForm from "@/components/forms/login-form";

const Page: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default Page;
