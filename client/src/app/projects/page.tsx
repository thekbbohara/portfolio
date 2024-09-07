import ProjectContainer from "@/components/project/ProjectContainer";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import React, { Suspense } from "react";
const projectData: {
  projectName: string;
  title: string;
  img: string;
  href: string;
  alt: string;
  tags: string;
}[] = [
    {
      projectName: "spfyui",
      title: "cli tool tool to manage react icons and components",
      img: "/assets/spfyui.png",
      href: "https://www.npmjs.com/package/spfyui",
      alt: "spfyui",
      tags: "nodejs",
    },
    {
      projectName: "colearnify",
      title: "Duis aute irure dolor in velit esse cillum dolore.",
      img: "/assets/colearnify.png",
      href: "https://github.com/thekbbohara/CoLearnify",
      alt: "colearnify",
      tags: "nextjs",
    },
    {
      projectName: "assign sync",
      title: "Duis aute irure dolor in velit esse cillum dolore.",
      img: "https://images.unsplash.com/photo-1569917761875-e2897cee7d80",
      href: "https://youtube.com/",
      alt: "assign-sync",
      tags: "nextjs",
    },
  ];
const Projects = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="grow h-full sm:flex">
        <ProjectSidebar />
        <ProjectContainer projects={projectData} />
      </section>
    </Suspense>
  );
};

export default Projects;
