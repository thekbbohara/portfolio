"use client";
import React from "react";
import {
  Folder5Fill,
  GamepadFill,
  MailFill,
  MarkdownFill,
  PhoneFill,
  TerminalBoxFill,
  User4Fill,
} from "@/assets/spfyicons";
import cn from "@/utils/cn";
import Link from "next/link";
import SubHeader from "../ui/SubHeader";
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
interface TsubCategory {
  type: string;
  name: string;
  icon: React.ReactNode;
  subInfo?: { subName: string; subIcon: React.ReactNode }[];
}
const AsideAbout = ({ category }: { category: string }) => {
  const subCategory: TsubCategory[] = [
    {
      type: "personal",
      name: "bio",
      icon: <Folder5Fill className="text-a3" />,
      subInfo: [{ subName: "about", subIcon: <MarkdownFill /> }],
    },
    {
      type: "hobbies",
      name: "interests",
      icon: <Folder5Fill className="text-a2" />,
      subInfo: [{ subName: "anime", subIcon: <MarkdownFill /> }],
    },
    {
      type: "professional",
      name: "education",
      icon: <Folder5Fill className="text-s3" />,
      subInfo: [
        { subName: "school", subIcon: <MarkdownFill /> },
        { subName: "bootcamp", subIcon: <MarkdownFill /> },
        { subName: "collage", subIcon: <MarkdownFill /> },
      ],
    },
  ];
  return (
    <aside className="h-full w-fit flex flex-shrink-0">
      <ul className="px-6 w-fit h-full flex flex-col py-4 gap-4 border border-transparent border-r-line">
        {about_category.map(({ query, icon }, id) => (
          <li key={id} className={cn(category !== query && "opacity-40")}>
            <Link href={`?category=${query}`}>{icon}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex flex-col   border border-transparent border-r-line">
        <div className="grow  ">
          {/* <header className="flex text-s4 border border-transparent border-b-line px-4 py-2">
              <ArrowDownSFill className="text-s4" />
                {category}-info
            </header> */}
          <SubHeader category={category} />
          <ul className="py-3 cursor-default">
            {subCategory.map(({ type, name, icon, subInfo }, id) => (
              <li key={id} className="flex flex-col gap-1 px-2">
                <Link
                  href={`?category=${type}`}
                  className={cn("flex gap-1 cursor-pointer")}
                >
                  <span
                    className={cn(
                      "font-semibold ",
                      category === type && "rotate-90",
                    )}
                  >
                    &gt;
                  </span>
                  <i>{icon}</i>
                  <span>{name}</span>
                </Link>
                <ul
                  className={cn(category !== type && "h-0 opacity-0 invisible")}
                >
                  {subInfo?.map(({ subName, subIcon }, id: number) => (
                    <li className={cn("flex pl-6")} key={id}>
                      {subIcon}
                      {subName}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="grow">
          {/* <header className="flex text-s4 gap-[1px] border border-transparent border-y-line px-4 py-2">
            <ArrowDownSFill className="text-s4" />
          </header> */}
          <SubHeader category="contact" className="border-t-line" />
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
