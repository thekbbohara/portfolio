import React from "react";
import SubHeader from "../ui/SubHeader";

const ProjectSidebar = () => {
  const techStack: { name: string; techComponent: React.ReactNode }[] = [
    { name: "react", techComponent: <i>r</i> },
    { name: "nextjs", techComponent: <i>n</i> },
  ];
  return (
    <aside className="flex flex-col grow min-h-full max-w-64 w-full border border-transparent border-r-line ">
      <SubHeader category="Projects" />
      <ul>
        {techStack.map(({ name, techComponent }, id) => (
          <li key={id} className="flex">
            {name}
            {techComponent}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
