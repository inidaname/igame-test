"use client";

import React, { useContext, useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";

import Button from "@/components/button";
import FormField from "@/components/form-field";
import { UserContext } from "@/provider";
import { setSessionToken } from "@/utils/session-manager";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
  });

  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setFormData({ username: value });
  };
  const {
    userData: { setUserData },
  } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${process.env.API_URL}/register`,
        formData
      );

      setSuccess(response.data.message);
      setSessionToken(response.data.token);
      setUserData(response.data.data);
      router.replace("/");
      setFormData({ username: "" });
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 p-4 border border-slate-500 rounded-md w-full md:w-1/3 flex flex-col"
    >
      <FormField
        label="username"
        name="username-register"
        onChange={handleChange}
        value={formData.username}
      />
      <div className="px-4 space-y-5 flex flex-col">
        <Button type="submit">Register</Button>
        <a
          href="./login"
          className="underline hover:no-underline text-sm text-zinc-600"
        >
          Login Here
        </a>
        {success && <p className="text-green-600 text-sm">{success}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </form>
  );
};

export default RegisterForm;
