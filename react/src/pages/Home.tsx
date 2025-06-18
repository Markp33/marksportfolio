import ProjectCard from '@/components/home/ProjectCard';
import { projects } from '@/data/projects';

export default function App() {
  return (
    <div className="min-h-screen px-6 py-10 bg-beige">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold">Mark's Portfolio</h1>
        <p className="text-brown mt-2">A journey through code & creativity</p>
      </header>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </section>

      <footer className="mt-16 text-center text-sm text-brown">
        © 2025 Mark Built with ❤️ and Tailwind
      </footer>
    </div>
  );
}
