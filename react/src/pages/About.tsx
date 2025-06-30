import AboutHero from "@/components/about/AboutHero";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function About() {
  const canvasRef = useRef();
  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <main>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-20">
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-7xl font-extrabold leading-tight">
            <span className="text-black">About me</span>
            <span className="text-purple-600">.</span>

            <br />
          </h1>
          <p className="text-lg text-gray-600">
            I'm a web development student with a passion for building clean,
            user-friendly websites. Let's bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
              Get In Touch
            </button>
            <button className="border-2 border-black px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition">
              Browse Projects
            </button>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
        <div className="mt-12 md:mt-0">
          <div className="w-104 h-104 rounded-full border-2 border-purple-400 p-2"></div>
        </div>
      </div>
    </main>
  );
}
