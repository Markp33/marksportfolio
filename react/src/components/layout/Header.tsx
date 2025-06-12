import { Link } from "react-router-dom";
import { navItems } from "@/data/navItems";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-2 font-bold">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
