import { motion } from 'framer-motion';
import { projects } from "@/data/projects";

export default function ProjectCard() {
  return (
    <>
      {projects.map((project) => (
        <motion.div
          key={project.title}
          whileHover={{ scale: 1.05 }}
          className="bg-lightBeige rounded-2xl p-6 shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl font-serif font-bold">{project.title}</h3>
          <p className="mt-2 text-sm">{project.desc}</p>
          <p className="mt-2 text-xs italic text-brown">{project.tech}</p>
          <a
            href={project.link}
            target="_blank"
            className="inline-block mt-4 text-sm underline hover:text-brown"
          >
            View Project →
          </a>
        </motion.div>
      ))}
    </>
  );
}
