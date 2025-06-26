
import Carousel from "@/components/home/Carousel";

export default function App() {
  return (
    <div className="min-h-screen px-6 py-20 bg-beige">
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-20">
      <div className="max-w-xl text-center md:text-left space-y-6">
        <p className="text-xl font-medium">Hey, I'm Mark <span className="inline-block">👋</span></p>
        <h1 className="text-5xl font-extrabold leading-tight">
          <span className="text-purple-600">Front</span>
          <span className="text-black">end</span>
          <br />
          <span className="text-black">WebDeveloper</span>
        </h1>
        <p className="text-lg text-gray-600">
          I'm a web development student with a passion for building clean, user-friendly websites. Let's bring your ideas to life!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
            Get In Touch
          </button>
          <button className="border-2 border-black px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition">
            Browse Projects
          </button>
        </div>
      </div>

      <div className="mt-12 md:mt-0">
        <div className="w-104 h-104 rounded-full border-2 border-purple-400 p-2">
          <img
            src="../public/img/me.jpg"
            alt="mrk"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>


        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <Carousel />
        </div>
      <footer className="mt-16 text-center text-sm text-brown">
        © 2025 Mark Built with ❤️ and Tailwind
      </footer>
    </div>
  );
}
