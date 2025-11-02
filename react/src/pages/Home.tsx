import { motion } from "framer-motion";
import Carousel from "@/components/home/Carousel";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 px-6">
      <div className="flex flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-20 min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl text-center md:text-left space-y-6"
        >
          <p className="text-xl font-medium">
            Hey, I'm Mark <span className="inline-block">👋</span>
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-extrabold leading-tight"
          >
            <span className="text-purple-600">Full</span>
            <span className="text-black">Stack</span>
            <br />
            <span className="text-black">WebDeveloper</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600"
          >
            I'm a web development student with a passion for building clean,
            user-friendly websites. Let's bring your ideas to life!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="/contact">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                Get In Touch
              </button>
            </a>

            <a href="/projects">
              <button className="border-2 border-black px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition">
                Browse Projects
              </button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 md:mt-0"
        >
          <div className="w-104 h-104 rounded-full border-2 border-purple-400 p-2">
            <img
              src="/img/me.jpg"
              alt="Mark"
              className="w-full h-full object-cover rounded-full drag-none"
            />
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center">
        <Carousel />
      </div>
    </div>
  );
}
