"use client";
import cn from "@/utils/cn";
import { useState, useLayoutEffect, useEffect } from "react";
import { OfflineCard } from "./offline-cad";
import { ActiveCard } from "./active-cad";

export const ActivityCard = ({ className }: { className: string }) => {
  const [activity, setActivity] = useState<null | {
    activity: string;
    title: string;
    started_time: string;
  }>(null);

  // Function to poll for activity
  const poolActivity = async () => {
    try {
      console.log("long polling...");
      const res = await fetch("/api/activity");
      if (!res.ok) {
        throw new Error("Failed to fetch activity");
      }
      const data = await res.json();
      if (data.activity !== null) {
        setActivity(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching activity:", error);
    }
  };
  // Fetch the initial activity data synchronously with useLayoutEffect
  useLayoutEffect(() => {
    poolActivity();
    // const fetchInitialData = async () => {
    //   console.log("Fetching initial activity...");
    //   const res = await fetch("/api/activity");
    //   if (!res.ok) {
    //     console.error("Failed to fetch initial activity");
    //     return;
    //   }
    //   const data = await res.json();
    //   if (data.activity) {
    //     setActivity(data);
    //   }
    // };

    // fetchInitialData();
  }, []); // Runs only once when the component is mounted

  // Set up long polling every 6 seconds with useEffect after initial data is fetched
  useEffect(() => {
    if (!activity) return; // Only start long polling if we have the initial activity data
    const intervalId = setInterval(() => {
      poolActivity();
    }, 6000);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [activity]); // Dependency on activity ensures polling starts after data is available

  return (
    <div className={cn("relative max-w-96 max-h-[70vh]", className)}>
      <div className="overflow-hidden pointer-events-none max-w-48 w-[60vw] h-48 sm:h-60 rounded-lg sm:-top-24 -left-18 sm:left-0 rotate-6 absolute bg-a2 blur-3xl opacity-30"></div>
      {activity ? <ActiveCard activity={activity} /> : <OfflineCard />}
      <div className="overflow-hidden z-0 pointer-events-none select-none max-w-80 w-[90vw] h-32 sm:h-60 -top-6 -right-12 rounded-full absolute bg-s3 blur-3xl opacity-30"></div>
    </div>
  );
};
