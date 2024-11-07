import SubHeader from "@/components/ui/SubHeader";
import cn from "@/utils/cn";
import React from "react";

const PersonalInfo = () => {
  const info: string[] = [
    "/**",
    "* About me",
    "* On a journey of discomfort of my own choosing",
    "* You can call me kb",
    "* imma minimalist",
    "* Love to call myself ambivert",
    "* No caffeine, drinks, or coke for me",
    "* Loves making useful stuff",
    "* Philosophy: Never complain, and be accountable for what you do, and remember that balance is key to life."
  ];
  info.push("*/");
  return (
    <div className="w-full">
      <SubHeader
        category={`kb bohara`}
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
export default PersonalInfo;
