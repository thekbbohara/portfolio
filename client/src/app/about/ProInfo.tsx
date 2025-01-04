import SubHeader from "@/components/ui/SubHeader";
import cn from "@/utils/cn";
import React from "react";

const ProInfo = () => {
  const date = new Date();
  const info: string[] = [
    "/**",
    '* "You can call me kb",',
    `* \"I have ${date.getFullYear() - 2024}.${date.getMonth()} years of experience in web\",`,
    '* "Currently working at peridot private limited.",',
    '* "I use arch btw.",',
    '* "Frameworks: Nextjs, express.js, Hono",',
    '* "Libraries: React, [Zustand, Redux], Zod, React Query,socket.io",',
    '* "Databases & Caching: Mongodb, mysql, redis",',
    '* "Styling: Tailwind css, shadcn",',
    '* "ORM: Prisma"',
    '* "school: Nothing related to coding",',
    '* "bootcamp: Broadway infosys (2024 Jul - 2024 dec)",',
    '* "collage: Didn\'t went to harvard",',
  ];
  info.push("*/");
  return (
    <div className="w-full">
      <SubHeader category={`developer`} className="text-s1" showIcon={false} />
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
