import ProjectContainer from "@/components/project/ProjectContainer";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import React, { Suspense } from "react";

const Projects = () => {
  return (
    <section className="grow h-full flex">
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectSidebar />
        <ProjectContainer />
      </Suspense>
    </section>
  );
};

export default Projects;
