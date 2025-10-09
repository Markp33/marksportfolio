import type { Project } from "@/types/types";

import gameoflife from "@/assets/vid/gameoflife.mp4";
import loveufestival from "@/assets/vid/luvu.mp4";
import focus6 from "@/assets/vid/focus6.mp4";
import roulette from "@/assets/vid/roulette.mp4";
import port from "@/assets/vid/portfolio.mp4";
import annex from "@/assets/vid/annex.mp4";
import kiosk from "@/assets/vid/kiosk.mp4";
import rolvin from "@/assets/vid/rolvin.mp4";
import smartbase from "@/assets/vid/smartbase.mp4";

export const schoolProjects: Project[] = [
  {
    id: "festival",
    title: "Festival Scheduler",
    desc: "An interactive lineup tool designed for festival visitors, where users can browse acts, create their own schedule, and explore detailed artist information. Built with React, Tailwind, and Vite, the project focused on delivering a smooth user experience with responsive design and real-time updates.",
    tech: ["React", "Tailwind", "progressive web app"],
    link: "https://festival-scheduler.markpetrenko.nl",
    video: loveufestival,
  },
  {
    id: "kiosk",
    title: "Kiosk App",
    desc: "A fully functional kiosk application for a restaurant that allows customers to browse the menu, place orders, and send them directly to the kitchen system. Developed using PHP with Tailwind for styling and SQL for data management. The project focused on usability, fast ordering workflows, and an intuitive interface suitable for touchscreen devices.",
    tech: ["Php", "Tailwind", "SQL"],
    link: "https://github.com/Markp33/Kiosk",
    video: kiosk,
  },
  {
    id: "annex",
    title: "Annex Bios",
    desc: "A cinema website developed as a class project. The team collaborated to create a professional platform that lets visitors view movie schedules, book tickets, and explore current lineups. My role centered on building the API, ensuring that other cinemas could integrate and use the data. The site was built with PHP, Tailwind, and SQL, and emphasized teamwork, modular design, and scalability.",
    tech: ["Php", "Tailwind", "SQL"],
    link: "https://github.com/ToastL/AnnexBios",
    video: annex,
  },
];

export const ownProjects: Project[] = [
  {
    id: "gol",
    title: "Game of Life",
    desc: "An interactive simulation of Conway's Game of Life, implemented with Node.js and Socket.IO to provide real-time multiplayer interaction. Users can create custom patterns, watch them evolve, and experiment with cellular automata rules. The project demonstrates algorithmic complexity while keeping the interface simple and engaging.",
    tech: ["Canvas", "p5", "JavaScript"],
    link: "https://game-of-life.markpetrenko.nl/",
    video: gameoflife,
  },
  {
    id: "roullet",
    title: "Roulette Game",
    desc: "A browser-based roulette game with a twist, designed to be played in real-time with multiple players. It uses WebSockets and Socket.IO to handle room creation, synchronization, and live updates. Built with React, Tailwind, and Vite, it was an exploration into both game design and the challenges of maintaining smooth communication between client and server.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://roulette.markpetrenko.nl",
    video: roulette,
  },
  {
    id: "portfolio1v",
    title: "1st Portfolio",
    desc: "My very first portfolio website, developed with React and Tailwind, connected to a headless WordPress CMS. The goal was to experiment with structured content management and modern frontend workflows. While the design wasn’t fully to my liking, it served as a valuable learning experience in building a scalable portfolio with dynamic content integration.",
    tech: ["Headless-wordpress", "Javascript", "Tailwind", "React", "Node.js"],
    link: "https://cms-portfolio-drab.vercel.app/",
    video: port,
  },
];

export const clientProjects: Project[] = [
  {
    id: "focus6",
    title: "Focus6",
    desc: "A productivity platform designed to help teams stay on track with their tasks. Focus6 provides features like collaborative task boards, progress tracking, and clean visual overviews. Developed with React, Tailwind, and Vite, the project emphasizes clarity, performance, and teamwork, delivering a modern interface for real-world productivity challenges.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://focus-6.markpetrenko.nl",
    video: focus6,
  },
  {
    id: "rolvin",
    title: "Rolvin Personal Trainer Website",
    desc: "A professional website for Rolvin, a personal trainer, designed to showcase his services, fitness programs, and client testimonials. Built with WordPress and Elementor, the site is easy to update, visually engaging, and optimized for lead generation. The focus was on creating a strong personal brand and giving potential clients a simple way to connect.",
    tech: ["Wordpress", "Elementor"],
    link: "https://rolvinrijkaardpt.nl/healthy-behaviours-2",
    video: rolvin,
  },
  {
    id: "smartbase",
    title: "Smartbase Portfolio Website",
    desc: "A portfolio website created for Smartbase, my father’s company. The site highlights the company’s services, projects, and expertise in a simple and professional format. Developed with React, Tailwind, and Vite, it prioritizes clarity and ease of navigation while providing a foundation that can be extended in the future.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://smartbase-inno.nl/",
    video: smartbase,
  },
];

