"use client";
import React from "react";
import {
  CodeSSlashFill,
  FileMusicFill,
  FileTextFill,
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
      subInfo: [
        { subName: "about", subIcon: <MarkdownFill className="size-5" /> },
      ],
    },
    {
      type: "hobbies",
      name: "interests",
      icon: <Folder5Fill className="text-a2" />,
      subInfo: [
        { subName: "books", subIcon: <FileTextFill className="size-5" /> },
        { subName: "coding", subIcon: <CodeSSlashFill className="size-5" /> },
        { subName: "music", subIcon: <FileMusicFill className="size-5" /> },
      ],
    },
    {
      type: "professional",
      name: "education",
      icon: <Folder5Fill className="text-s3" />,
      subInfo: [
        { subName: "school", subIcon: <MarkdownFill className="size-5" /> },
        { subName: "bootcamp", subIcon: <MarkdownFill className="size-5" /> },
        { subName: "collage", subIcon: <MarkdownFill className="size-5" /> },
      ],
    },
  ];
  return (
    <aside className="h-full w-fit flex flex-shrink-0">
      <ul className=" pl-6 pr-2 sm:px-6  w-fit h-full flex flex-col py-4 gap-4 border border-transparent border-r-line">
        {about_category.map(({ query, icon }, id) => (
          <li key={id} className={cn(category !== query && "opacity-40")}>
            <Link href={`?category=${query}`}>{icon}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex flex-col   border border-transparent border-r-line">
        <div className="grow  ">
          <SubHeader category={`${category}-info`} />
          <ul className="py-3 cursor-default">
            {subCategory.map(({ type, name, icon, subInfo }, id) => (
              <li key={id} className="flex flex-col gap-1 px-2">
                <Link
                  href={`?category=${type}`}
                  className={cn("flex gap-1 cursor-pointer")}
                >
                  <span
                    className={cn(
                      "font-semibold transition-transform",
                      category === type && "rotate-90",
                    )}
                  >
                    &gt;
                  </span>
                  <i>{icon}</i>
                  <span>{name}</span>
                </Link>
                <ul
                  className={cn(
                    category !== type ? "h-0 opacity-0 invisible" : "h-full",
                    "transition-[height] ease-linear",
                  )}
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
          <SubHeader category="contact-info" className="border-t-line" />
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
