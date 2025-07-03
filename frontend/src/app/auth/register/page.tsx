import React from "react";

import { NextPage } from "next";

import RegisterForm from "@/components/forms/register-form";

const Page: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <RegisterForm />
    </div>
  );
};

export default Page;
