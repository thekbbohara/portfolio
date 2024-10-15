import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Buttons';

type Project = {
  projectName: string;
  title: string;
  img: string;
  href: string;
  alt: string;
  tags: string[];
}

export default function ProjectContainer({ projects }: { projects: Project[] }) {
  return (
    <div className="bg-[#00000000]  min-h-screen p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, id) => (
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
                {// <div className="flex flex-wrap gap-2 mb-4">
                  //{project.tags.map((tag, index) => (
                  // <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  //  {tag}
                  //</span>
                  //))}
                  //</div>
                }

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
