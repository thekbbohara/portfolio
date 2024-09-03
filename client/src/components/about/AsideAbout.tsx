"use client";
import React from "react";
import {
  ArrowDownSFill,
  GamepadFill,
  MailFill,
  PhoneFill,
  TerminalBoxFill,
  User4Fill,
} from "@/assets/spfyicons";
import cn from "@/utils/cn";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const AsideAbout = () => {
  const about_category: { query: string; icon: React.ReactNode }[] = [
    {
      query: "professional",
      icon: <TerminalBoxFill />,
    },
    {
      query: "personal",
      icon: <User4Fill />,
    },
    {
      query: "hobbies",
      icon: <GamepadFill />,
    },
  ];
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "professional";
  return (
    <aside className="h-full w-fit flex flex-shrink-0">
      <ul className="px-6 w-fit h-full flex flex-col py-4 gap-4 border border-transparent border-r-line">
        {about_category.map(({ query, icon }, id) => (
          <li key={id} className={cn(category !== query && "opacity-40")}>
            <Link href={`?category=${query}`}>{icon}</Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col   border border-transparent border-r-line">
        <div className="grow  ">
          <header className="flex text-s4 border border-transparent border-b-line px-4 py-2">
            <ArrowDownSFill className="text-s4" />
            {category}-info
          </header>
        </div>
        <div className="grow">
          <header className="flex text-s4 gap-[1px] border border-transparent border-y-line px-4 py-2">
            <ArrowDownSFill className="text-s4" />
            contact-info
          </header>
          <ul className="flex flex-col mt-4 gap-2">
            <li className="flex gap-1 px-2">
              <MailFill /> thekbbohara@gmail.com
            </li>
            <li className="flex gap-1 px-2">
              <PhoneFill /> +9779748225937
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AsideAbout;
