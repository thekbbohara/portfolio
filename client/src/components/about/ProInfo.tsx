import cn from "@/utils/cn";
import React from "react";
import SubHeader from "../ui/SubHeader";

const ProInfo = () => {
  const date = new Date();
  const info: string[] = [
    "/**",
    "* const info: string[] = [",
    "* \"You can call me kb\",",
    `* \"I have ${date.getFullYear() - 2024}.${date.getMonth() + 1} years of experience in web\",`,
    "* \"I use arch btw.\",",
    "* \"oh and I code in neovim\".",
    "* \"Runtime: bun && node\",",
    "* \"Frameworks: Nextjs, express.js, Hono\",",
    "* \"Libraries: React, [Zustand, Redux], Zod, React Query,socket.io\",",
    "* \"Databases & Caching: MongoDB, Redis\",",
    "* \"Styling: tailwind css\",",
    "* \"for ui stuff: spfyui, shadcn\",",
    "* \"Tools: Git, docker, kitty, spfyui\",",
    "* \"school: nothing related to coding\",",
    "* \"bootcamp: broadway infosys\",",
    "* \"didn't went to harvard\",",
  ];
  info.push("* ]");
  info.push("*/");
  return (
    <div className="w-full">
      <SubHeader
        category={`developer`}
        className="text-s1"
        showIcon={false}
      />
      <article className="py-4 px-2 sm:py-8 sm:px-10 text-s1">
        {info.map((p, id) => (
          <div key={id} className={cn("flex gap-1 sm:gap-4")}>
            <span className="select-none w-[2ch] text-end hidden sm:inline-block">
              {id + 1}
            </span>
            <span className={cn(id !== 0 && "pl-3")}>{p}</span>
          </div>
        ))}
      </article>
    </div>
  );
};
export default ProInfo;
