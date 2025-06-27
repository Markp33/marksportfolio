import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { useRef } from "react";



export default function Projects() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Projects<span className="text-purple-600">.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => {
          const video = useRef(null)

          return <div key={index}>
            <div className="bg-gray-300 rounded-3xl overflow-hidden mb-4 relative" onMouseEnter={() => { video.current.play() }} onMouseLeave={() => { video.current.pause() }}>
              <video ref={video} loop muted className="w-full object-cover hover:grayscale-0 grayscale transition duration-300">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-1">
              {project.title}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 text-purple-600" />
                </a>
              )}
            </h3>
            <p className="text-gray-600 mt-1">{project.desc}</p>
          </div>
        })}
      </div>
    </section>
  );
}
