'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../components/ui/Buttons';
import { useSearchParams } from "next/navigation";

interface Iproject {
  projectName: string;
  title: string;
  img: string;
  href: string;
  alt: string;
  tags: string[];
}

const projectData: Iproject[] = [
  {
    projectName: "spfyui",
    title: "cli tool to manage react icons and components.",
    img: "/assets/spfyui.png",
    href: "https://www.npmjs.com/package/spfyui",
    alt: "spfyui",
    tags: ["nodejs"],
  },
  {
    projectName: "ai-calculator",
    title: "Draw to calculate.",
    img: "/assets/ai-calc.jpg",
    href: "https://ai-calculator-rose.vercel.app/",
    alt: "ai-calculator[rose]",
    tags: ["nextjs", "typescript"],
  },
  {
    projectName: "assign-sync",
    title: "Realtime code assignment /sɪŋkrənʌɪˈzeɪʃ(ə)n/ platform.",
    img: "/assets/assign-sync.png",
    href: "https://assign-sync.vercel.app/",
    alt: "assign-sync",
    tags: ["web-socket", "nextjs", "bun"],
  },
];

export default function ProjectContainer() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  let filters: string[] = [];
  if (filterParam) {
    try {
      // Convert the 'filter' query parameter into an array of strings
      const jsonString = filterParam.replace(/'/g, '"');
      const parsedFilters: string[] = JSON.parse(jsonString);

      filters = parsedFilters;
    } catch (e) {
      console.error("Failed to parse filter parameter:", e);
      filters = [];
    }
  } else {
    filters = [];
  }

  // Filter the project data based on the current filters
  const filteredProject = filters.length > 0
    ? projectData.filter(project =>
      filters.some(filter => project.tags.includes(filter))
    )
    : projectData;

  return (
    <div className="bg-[#00000000]  p-8 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-scroll [&::-webkit-scrollbar]:w-2 ">
          {filteredProject.map((project, id) => (
            <div key={id} className="bg-transparent rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
              <div className="px-1 py-4 text-md">
                <span className="text-s3 font-semibold">
                  {id + 1}.
                </span>
                <span>{" //"}_{project.projectName}</span>
              </div>
              <div className="relative h-48">
                <Image
                  src={project.img}
                  alt={project.alt}
                  layout="fill"
                  className='rounded-t-lg object-cover'
                />
              </div>
              <div className="bg-p3 p-6 flex flex-col flex-grow">
                <p className="text-gray-300 text-sm mb-4 flex-grow">{project.title}</p>
                <Button className='w-fit'>
                  <Link
                    target='_blank'
                    href={project.href}
                  >
                    view project
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
