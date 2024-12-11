"use client";
import cn from "@/utils/cn";
import Image from "next/image";
import { useState, useEffect } from "react";

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
      <div
        id="activity-card"
        className=" flex flex-col bg-p1 p-2 w-72 rounded-md mx-auto"
      >
        <header className="text-s3">&gt; Currently coding</header>
        <div className="flex gap-2 items-center">
          <Image
            src={"/assets/zed-editor.png"}
            width={75}
            height={75}
            alt="zed-editor"
            className="w-12"
          />
          <div className="flex flex-col leading-4">
            <span className="text-s4">{"Zed-Editor"}</span>
            <span className="tex-s4/100">{time}</span>
          </div>
        </div>
      </div>
      <div className="z-0 pointer-events-none select-none max-w-80 w-[90vw] h-32 sm:h-60 -top-6 -right-12 rounded-full absolute bg-s3 blur-3xl opacity-30"></div>

      {/* <div className="z-0 pointer-events-none select-none max-w-80 w-[90vw] h-32 -top-6 -right-10 rounded-full absolute bg-s3 blur-3xl opacity-30"></div> */}
    </div>
  );
};
