"use client";
import React, { useState } from "react";
import SubHeader from "../ui/SubHeader";
import CheckLogo from "../ui/CheckLogo";
import {
  Bun,
  Express,
  Hono,
  NextjsFill,
  NodejsLine,
  ReactjsLine,
} from "@/assets/spfyicons";
import { useRouter, useSearchParams } from "next/navigation";
import cn from "@/utils/cn";
const ProjectSidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const filterParam = searchParams.get("filter");
  let filters = [];
  if (filterParam) {
    try {
      const jsonString = filterParam.replace(/'/g, '"');
      filters = JSON.parse(jsonString);
    } catch (e) {
      console.error("Failed to parse filter parameter:", e);
    }
  }
  const handleFilterChange = (name: string) => {
    const updatedFilters = filters.includes(name)
      ? filters.filter((n: string) => n !== name)
      : [...filters, name];

    const queryString = new URLSearchParams({
      filter: JSON.stringify(updatedFilters),
    }).toString();
    router.push(`?${queryString}`);
  };
  const techStack: { name: string; icon: React.ReactNode }[] = [
    { name: "react", icon: <ReactjsLine /> },
    { name: "nextjs", icon: <NextjsFill /> },
    { name: "bun", icon: <Bun /> },
    { name: "nodejs", icon: <NodejsLine /> },
    { name: "hono", icon: <Hono /> },
    { name: "express", icon: <Express className="fill-s1" /> },
  ];
  return (
    <aside className="flex flex-col grow min-h-full sm:max-w-64  w-full border border-transparent sm:border-r-line ">
      <SubHeader
        category="Projects"
        rotate={showFilters ? "rotate-180" : "rotate-0"}
        onClick={() => {
          setShowFilters(!showFilters);
        }}
      />
      <ul
        className={cn(
          "p-4 gap-2  grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid",
          showFilters ? "grid" : "hidden",
        )}
      >
        {techStack.map(({ name, icon }, id) => (
          <li
            key={id}
            className={cn(
              "flex  items-center  border sm:p-0 p-2 sm:border-transparent border-line",
              filters?.includes(name) && "text-s4",
            )}
            onClick={() => {
              handleFilterChange(name);
            }}
          >
            <CheckLogo
              icon={icon}
              name={name}
              isChecked={filters?.includes(name)}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
