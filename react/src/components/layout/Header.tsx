import { Link } from "react-router-dom";
import { navItems } from "@/data/navItems";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <nav className=" max-w-6xl mx-auto px-4 py-3">
        <ul className="flex justify-center gap-6 text-gray-800">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
