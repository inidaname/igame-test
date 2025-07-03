"use client";
import { getSessionToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = getSessionToken();
  const router = useRouter();
  if (token) {
    router.push("/");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  return <>{children}</>;
}
