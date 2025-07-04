"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 8000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [{ location: [52.2129919, 5.2793703], size: 0.3 }],
};

function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}

export default function About() {
  return (
    <main>
      <section className="min-h-screen bg-pink text-gray-900 flex flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-20">
        <div className="flex items-center max-w-xl text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
          <div className="space-y-6">
            <h1 className="text-7xl font-extrabold leading-tight">
              <span className="text-black">About me</span>
              <span className="text-purple-600">.</span>
              <br />
            </h1>
            <p
              className="pl-3 text-lg text-gray-600 
                    before:content-[''] before:left-0 before:h-full before:bg-purple-600 before:w-1 before:absolute before:top-0 relative before:rounded-full"
            >
              I'm a passionate web development student who enjoys creating
              beautiful, fast, and user-friendly websites. I’m always learning
              and love taking on new challenges that push me to grow as a
              developer.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-0 overflow-hidden h-[300px] w-[600px] max-w-full border-2 border-gray-300 rounded-lg shadow-lg relative">
          <Globe />
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          My Story<span className="text-purple-600">.</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          My coding journey started when I discovered how websites are built. It
          sparked a passion in me, and since then I’ve been diving deeper into
          front-end technologies like{" "}
          <span className="text-purple-600">HTML</span>,{" "}
          <span className="text-purple-600">CSS</span>,{" "}
          <span className="text-purple-600">JavaScript</span>, and{" "}
          <span className="text-purple-600">React</span>.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          I study web development and work on different school and personal
          projects, from simple landing pages to more complex apps like a
          real-time roulette game with{" "}
          <span className="text-purple-600">Socket.IO</span>.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          I also enjoy learning new tools and frameworks, like{" "}
          <span className="text-purple-600">Tailwind CSS</span>,{" "}
          <span className="text-purple-600">Vite</span>, and{" "}
          <span className="text-purple-600">Headless WordPress</span>, and I
          love experimenting with animations and APIs.
        </p>
        <p className="text-lg text-gray-700">
          I'm always open to feedback and collaboration and excited to continue
          improving my skills and one day turn my passion into a full-time job
          💜
        </p>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          My Experience<span className="text-purple-600">.</span>
        </h2>

        <div className="flex items-start space-x-4 mb-8">
          <span className="text-5xl font-bold text-gray-800">01</span>
          <div>
            <p className="text-purple-600 font-medium">Student Project</p>
            <h3 className="text-2xl font-extrabold text-gray-900">AnnexBios</h3>
            <p className="text-gray-700">
              A movie theater website built with <strong>Svelte</strong> and{" "}
              <strong>Tailwind CSS</strong> in a team setting. I worked on the
              layout, dynamic data rendering, and responsive design.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 mb-8">
          <span className="text-5xl font-bold text-gray-800">02</span>
          <div>
            <p className="text-purple-600 font-medium">Personal Project</p>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Real-time Roulette Game
            </h3>
            <p className="text-gray-700">
              A multiplayer roulette game using <strong>JavaScript</strong>,{" "}
              <strong>HTML/CSS</strong>, <strong>Node.js</strong>, and{" "}
              <strong>Socket.IO</strong>. Players can join rooms and spin the
              wheel in real-time.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <span className="text-5xl font-bold text-gray-800">03</span>
          <div>
            <p className="text-purple-600 font-medium">School Project</p>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Festival Planner
            </h3>
            <p className="text-gray-700">
              A scrollable festival schedule app made with{" "}
              <strong>React</strong>, <strong>Vite</strong>, and{" "}
              <strong>Tailwind</strong>. I handled the JSON-based lineup and
              dynamic rendering of all artist blocks on the timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          My Skills<span className="text-purple-600">.</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          I sepecialize in{" "}
          <span className="text-purple-600">React,</span>{" "}
          but I also have experience with{" "}
          <span className="text-purple-600">HTML</span>,{" "}
          <span className="text-purple-600">CSS</span>,{" "}
          <span className="text-purple-600">JavaScript</span>,{" "}
          <span className="text-purple-600">Node.js</span>,{" "}
          <span className="text-purple-600">Express</span>,{" "}
          <span className="text-purple-600">MongoDB</span>,{" "}
          <span className="text-purple-600">Tailwind CSS</span>,{" "}
          <span className="text-purple-600">Vite</span>,{" "}
          <span className="text-purple-600">Svelte</span>,{" "}
          <span className="text-purple-600">WordPress</span>, and{" "}
          <span className="text-purple-600">Socket.IO</span>.
        
        </p>
      </section>
    </main>
  );
}
