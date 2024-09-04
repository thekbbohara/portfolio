"use client";
import React from "react";
import SubHeader from "../ui/SubHeader";
import CheckLogo from "../ui/CheckLogo";
import { NextjsFill, ReactjsLine } from "@/assets/spfyicons";
import { useRouter, useSearchParams } from "next/navigation";
const ProjectSidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterParam = searchParams.get("filter");
  let filters = [];
  if (filterParam) {
    try {
      // Replace single quotes with double quotes for valid JSON format
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
  ];
  return (
    <aside className="flex flex-col grow min-h-full max-w-64 w-full border border-transparent border-r-line ">
      <SubHeader category="Projects" />
      <ul className="px-4 py-2">
        {techStack.map(({ name, icon }, id) => (
          <li
            key={id}
            className="flex"
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
