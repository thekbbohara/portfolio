import ProjectContainer from "@/components/project/ProjectContainer";
import ProjectSidebar from "@/components/project/ProjectSidebar";
import React, { Suspense } from "react";
const projectData: {
  projectName: string;
  title: string;
  img: string;
  href: string;
  alt: string;
  tags: string[];
}[] = [
    {
      projectName: "spfyui",
      title: "cli tool to manage react icons and components.",
      img: "/assets/spfyui.png",
      href: "https://www.npmjs.com/package/spfyui",
      alt: "spfyui",
      tags: ["nodejs"],
    }, {
      projectName: "ai-calculator",
      title: "Draw to calculate.",
      img: "/assets/ai-calc.jpg",
      href: "https://ai-calculator-rose.vercel.app/",
      alt: "ai-calculator[rose]",
      tags: ["nextjs", "typescript"],
    }, {
      projectName: "assign-sync",
      title: "Realtime code assignment /sɪŋkrənʌɪˈzeɪʃ(ə)n/ platform.",
      img: "/assets/assign-sync.png",
      href: "https://assign-sync.vercel.app/",
      alt: "assign-sync",
      tags: ["web-socket"],
    }
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
