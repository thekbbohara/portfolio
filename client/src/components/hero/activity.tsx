"use client";
import cn from "@/utils/cn";
import Image from "next/image";
import { useState, useEffect } from "react";
import { OfflineCard } from "./offline-cad";

export const ActivityCard = ({ className }: { className: string }) => {
  // Initialize time state
  const [time, setTime] = useState("01:30");

  // Function to add 1 second
  const incrementTime = () => {
    const [minutes, seconds] = time.split(":").map(Number);
    let newMinutes = minutes;
    let newSeconds = seconds + 1;
    if (newSeconds >= 60) {
      newSeconds = 0;
      newMinutes += 1;
    }
    // Format time as MM:SS
    const formattedTime = `${String(newMinutes).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
    setTime(formattedTime);
  };
  // useEffect to run incrementTime every second
  useEffect(() => {
    const interval = setInterval(incrementTime, 1000);
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [time]);
  return (
    <div className={cn("relative max-w-96 max-h-[70vh]", className)}>
      <div className="pointer-events-none max-w-48 w-[60vw] h-48 sm:h-60 rounded-lg sm:-top-24 -left-18 sm:left-0 rotate-6 absolute bg-a2 blur-3xl opacity-30"></div>
      <OfflineCard />
      <div className="z-0 pointer-events-none select-none max-w-80 w-[90vw] h-32 sm:h-60 -top-6 -right-12 rounded-full absolute bg-s3 blur-3xl opacity-30"></div>
    </div>
  );
};
