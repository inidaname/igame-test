"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getSessionToken } from "@/utils/session-manager";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const token = getSessionToken();

  useEffect(() => {
    if (!token && !pathname.startsWith("/auth")) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [token, pathname, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return <>{children}</>;
}
