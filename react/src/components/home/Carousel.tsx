import { useEffect, useRef, useState } from "react";
import { schoolProjects, ownProjects, clientProjects } from "@/data/projects";
import { Link } from "react-router-dom";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  const allProjects = [...schoolProjects, ...ownProjects, ...clientProjects];
  const totalSlides = allProjects.length;
  const extendedSlides = [...allProjects, ...allProjects];

  useEffect(() => {
    function updateSlides() {
      if (window.innerWidth < 768) {
        setVisibleSlides(1);
      } else {
        setVisibleSlides(3);
      }
    }
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Auto scroll
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
  }, [index, totalSlides]);

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
          const isMobile = window.innerWidth < 768;

          return (
            <div
              key={i}
              className="px-3"
              style={{ width: `${100 / extendedSlides.length}%` }}
            >
              <div className="bg-gray-300 rounded-3xl overflow-hidden mb-4 relative">
                <Link to="/projects">
                  <div
                    className="bg-gray-300 rounded-3xl overflow-hidden mb-4 relative"
                    onMouseEnter={() => !isMobile && videoRef.current?.play()}
                    onMouseLeave={() => !isMobile && videoRef.current?.pause()}
                    onClick={() => {
                      if (isMobile && videoRef.current) {
                        if (videoRef.current.paused) {
                          videoRef.current.play();
                        } else {
                          videoRef.current.pause();
                        }
                      }
                    }}
                  >
                    <video
                      ref={videoRef}
                      loop
                      muted
                      playsInline
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
                  >
                  </a>
                )}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
