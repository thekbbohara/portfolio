import cn from "@/utils/cn";
import React from "react";
import SubHeader from "../ui/SubHeader";

const ProInfo = () => {
  const date = new Date();
  const info: string[] = [
    "/**",
    "* official stuff",
    "* just fyi it's khagendra bahadur bohara",
    `* I have ${date.getFullYear() - 2024}.${date.getMonth()} years of experience in web`,
    "* I use arch btw.",
    "* oh and I code in neovim.",
    "* school: nothing related to coding",
    "* bootcamp: broadway infosys",
    "* didn't went to harvard'",
  ];
  info.push("*/");
  return (
    <div className="w-full">
      <SubHeader
        category={`personal-info`}
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
