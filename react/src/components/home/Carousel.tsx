import { useEffect, useRef, useState } from "react";
import { slides } from "./carouselData";

const visibleSlides = 3;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const extendedSlides = [...slides, ...slides]; // duplicate for looping

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
      }, 700); // match transition time
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden py-6">
      <div
        ref={trackRef}
        className="flex"
        style={{
          width: `${(extendedSlides.length / visibleSlides) * 100}%`,
          transform: `translateX(-${(index * 100) / extendedSlides.length}%)`,
          transition: transitioning ? "transform 0.7s ease-in-out" : "none",
        }}
      >
        {extendedSlides.map((slide, i) => (
            <div
              key={i}
              className="h-64 px-2"
              style={{ width: `${100 / extendedSlides.length}%` }}
            >

            <div
              className={`h-full w-full rounded-xl flex items-center justify-center text-white text-2xl font-bold ${slide.color}`}
            >
              {slide.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
