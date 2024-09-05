"use client";
import React, { useState } from "react";
import SubHeader from "../ui/SubHeader";
import CheckLogo from "../ui/CheckLogo";
import { NextjsFill, NodejsLine, ReactjsLine } from "@/assets/spfyicons";
import { useRouter, useSearchParams } from "next/navigation";
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
    { name: "bun", icon: <NodejsLine /> },
    { name: "nodejs", icon: <NodejsLine /> },
  ];
  return (
    <aside className="flex flex-col grow min-h-full sm:max-w-64  w-full border border-transparent sm:border-r-line ">
      <SubHeader
        category="Projects"
        rotate={showFilters ? "rotate-0" : "rotate-180"}
        onClick={() => {
          setShowFilters(!showFilters);
        }}
      />
      {showFilters && (
        <ul className="p-4 gap-2 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
          {techStack.map(({ name, icon }, id) => (
            <li
              key={id}
              className="flex  items-center  border sm:p-0 p-2 sm:border-transparent border-line"
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
      )}
    </aside>
  );
};

export default ProjectSidebar;
