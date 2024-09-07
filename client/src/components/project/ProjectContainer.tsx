import React from "react";
import Card from "../ui/Card";

const ProjectContainer = ({
  projects,
}: {
  projects: {
    projectName: string;
    title: string;
    img: string;
    href: string;
    alt: string;
    tags: string;
  }[];
}) => {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-4 sm:p-8">
      {projects.map(({ projectName, title, img, href, alt }, id) => (
        <div className="flex flex-col h-[314px] mx-auto">
          <h1 className="flex gap-2 py-3">
            <strong className="text-s3">Project {id + 1}</strong>
            <span>{`//_${projectName}`}</span>
          </h1>
          <Card img={img} href={href} alt={alt} className="flex-1">
            {title}
          </Card>
        </div>
      ))}
    </section>
  );
};

export default ProjectContainer;
