import cn from "@/utils/cn";
import React from "react";

const ProfessionalInfo = () => {
  const date = new Date();
  const info: string[] = [
    "/**",
    "* About me",
    "* You can call me kb",
    `* I have ${date.getFullYear() - 2024}.${date.getMonth()} years of experience in web`,
    "* Loves making  useful stuff",
    "* I code in neovim btw.",
    "* loves typescript",
    "* Runtime: bun && node",
    "* Frameworks: Nextjs, express.js, Hono,",
    "* Libraries: React, Zustand, Redux, Zod, React Query",
    "* Databases & Caching: MongoDB, Redis",
    "* Styling: tailwind css,",
    "* UI components: spfyui",
    "* Tools: Git, docker, kitty, spfyui",
  ];
  info.push("*/");
  return (
    <article className="py-4 px-10 text-s1">
      {info.map((p, id) => (
        <div key={id} className={cn("flex gap-4")}>
          <span className="select-none w-[2ch] text-end">{id + 1}</span>
          <span className={cn(id !== 0 && "pl-3")}>{p}</span>
        </div>
      ))}
    </article>
  );
};
export default ProfessionalInfo;
