import ProjectContainer from "@/components/project/ProjectContainer";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import React, { Suspense } from "react";

const Projects = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="grow h-full sm:flex">
        <ProjectSidebar />
        <ProjectContainer />
      </section>
    </Suspense>
  );
};

export default Projects;
