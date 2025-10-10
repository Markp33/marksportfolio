import { ExternalLink, ChevronDown } from "lucide-react";
import { schoolProjects, ownProjects, clientProjects } from "@/data/projects";
import { useRef, useState } from "react";

export default function Projects() {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const renderProjects = (projects: any[], category: string) => (
    <div className="mb-26">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">
        {category}<span className="text-purple-600">.</span>
      </h3>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => {
          const uniqueIndex = `${category}-${index}`;
          return (
            <div
              key={uniqueIndex}
              className="relative min-h-[370px] my-24"
            >
              <div
                className="bg-gray-300 rounded-3xl overflow-hidden mb-4 relative"
                onMouseEnter={() => {
                  const video = videoRefs.current[uniqueIndex];
                  if (video) video.play();
                }}
                onMouseLeave={() => {
                  const video = videoRefs.current[uniqueIndex];
                  if (video) video.pause();
                }}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[uniqueIndex] = el;
                  }}
                  loop
                  muted
                  className="w-full object-cover hover:grayscale-0 grayscale transition duration-300"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex items-center gap-1">
                <h4 className="text-xl font-bold text-gray-900 flex items-center">
                  {project.title}
                </h4>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <ExternalLink className="w-4 h-4 text-purple-600" />
                  </a>
                )}
                <button
                  className="ml-1 p-1 rounded-full hover:bg-gray-200 transition"
                  onClick={() =>
                    setOpenIndex(openIndex === uniqueIndex ? null : uniqueIndex)
                  }
                  aria-label={
                    openIndex === uniqueIndex ? "Hide Info" : "Show Info"
                  }
                >
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                      openIndex === uniqueIndex ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              <div className="flex flex-col items-start">
                <div
                  className={`transition-all duration-300 overflow-hidden p-4 w-full z-20 absolute ${
                    openIndex === uniqueIndex
                      ? "max-h-40 opacity-100 pointer-events-auto"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                  style={{
                    top: "100%",
                    marginTop: "0.5rem",
                  }}
                >
                  <p className="text-gray-700">{project.desc}</p>
                  <p className="text-gray-900">
                    Used stack:{" "}
                    {Array.isArray(project.tech) ? (
                      project.tech.map((stack: string, i: number) => (
                        <span key={stack} className="text-purple-700">
                          {stack}
                          {i < project.tech.length - 1 && (
                            <span className="text-gray-900">, </span>
                          )}
                        </span>
                      ))
                    ) : (
                      <span className="text-purple-700">{project.tech}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Projects<span className="text-purple-600">.</span>
      </h2>

      {renderProjects(schoolProjects, "School Projects")}
      {renderProjects(ownProjects, "Own Projects")}
      {renderProjects(clientProjects, "Client Projects")}
    </section>
  );
}
