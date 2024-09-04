import ProjectContainer from "@/components/project/ProjectContainer";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import CheckBox from "@/components/ui/CheckBox";
import React from "react";

const Projects = () => {
  return (
    <section className="grow h-full flex">
      <ProjectSidebar />
      <ProjectContainer />
    </section>
  );
};

export default Projects;
