import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";


const visibleSlides = 3;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = projects.length;
  const extendedSlides = [...projects, ...projects];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === totalSlides) {
      const timeout = setTimeout(() => {
        setTransitioning(false);
        setIndex(0);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden py-6">
      <div
        ref={trackRef}
        className="flex"
        style={{
          width: `${(extendedSlides.length / visibleSlides) * 100}%`,
          transform: `translateX(-${(index * 100) / extendedSlides.length}%)`,
          transition: transitioning ? "transform 0.7s ease-in-out" : "none",
        }}
      >
        {extendedSlides.map((project, i) => {
          const videoRef = useRef<HTMLVideoElement>(null);

          return (
            <div
              key={i}
              className="px-3"
              style={{ width: `${100 / extendedSlides.length}%` }}
            >
              <div
                className="bg-gray-300 rounded-3xl overflow-hidden mb-4 relative"
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => videoRef.current?.pause()}
              >
                <Link to="/projects">
                  <div
                    className="bg-gray-300 rounded-3xl overflow-hidden mb-4 relative"
                    onMouseEnter={() => videoRef.current?.play()}
                    onMouseLeave={() => videoRef.current?.pause()}
                  >
                    <video
                      ref={videoRef}
                      loop
                      muted
                      className="w-full h-48 object-cover hover:grayscale-0 grayscale transition duration-300"
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Link>
              </div>

              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-1">
                {project.title}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                )}
              </h3>
              <p className="text-gray-600 mt-1">{project.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
