import type { Project } from "@/types/types";

import gameoflife from "@/assets/vid/gameoflife.mp4";
import loveufestival from "@/assets/vid/love-ufestival-app.mp4";
import focus6 from "@/assets/vid/focus6.mp4";
import roulette from "@/assets/vid/roulette.mp4";

export const projects: Project[] = [
  {
    id: "gol",
    title: "Game of Life",
    desc: "Interactive simulation of Conway's Game of Life.",
    tech: ["Node.js", "Socket.IO", "JavaScript"],
    link: "https://github.com/Markp33/game_of_life",
    video: gameoflife,
  },
  {
    id: "festival",
    title: "Festival Scheduler",
    desc: "Interactive lineup tool for festival visitors.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://github.com/Markp33/love-u-festival",
    video: loveufestival,
  },
    {
    id: "focus6",
    title: "Focus6",
    desc: "A productivity website to help you focus as a team on your tasks.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://github.com/Markp33/codewave6",
    video: focus6,
  },
      {
    id: "roullet",
    title: "Roullet-game",
    desc: "A simple roulette game with a twist. Made with WebSocket and Socket.IO.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://github.com/Markp33/rooms-roulette",
    video: roulette,
  },
];
