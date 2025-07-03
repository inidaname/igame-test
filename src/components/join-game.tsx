"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";

const JoinGame: React.FC = () => {
  const router = useRouter();
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
  }, [countdown, router]);

  const handleJoinClick = () => {
    router.push("/game");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-6">
      <Button onClick={handleJoinClick}>Join Now</Button>
      <p className="text-gray-600 text-sm">
        There is an active game session, you can join in{" "}
        <strong>{countdown}s</strong>
      </p>
    </div>
  );
};

export default JoinGame;
