import { Suspense } from "react";
import ProjectContainer from "./ProjectContainer";
import ProjectSidebar from "./ProjectSidebar";

const Projects = async () => {

  return (
    <Suspense>
      <section className="grow h-full sm:flex">
        <ProjectSidebar />
        <ProjectContainer />
      </section>
    </Suspense>
  );
};

export default Projects;
