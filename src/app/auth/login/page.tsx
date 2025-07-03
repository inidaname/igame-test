import React from "react";

import { NextPage } from "next";
import FormField from "@/components/form-field";
import Button from "@/components/button";

const Page: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <form className="space-y-5 p-4 border border-slate-500 rounded-md w-full md:w-1/3 flex flex-col">
        <FormField label="username" />
        <div className="px-4 flex flex-col space-y-5">
          <Button>Login Here</Button>
          <a
            href="./register"
            className="underline hover:no-underline text-sm text-zinc-600"
          >
            Register Here
          </a>
        </div>
      </form>
    </div>
  );
};

export default Page;
