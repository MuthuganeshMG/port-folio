import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-scroll";
import {
  SunIcon,
  MoonIcon,
  AlignLeft,
  AlignRight,
} from "lucide-react";
import { PiCodeLight } from "react-icons/pi";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const linkBase =
    "cursor-pointer shadow-xl rounded py-1 border-x transition hover:bg-green-500";
  const linkInactive =
    "hover:bg-green-600 dark:bg-white dark:hover:bg-green-500 dark:border-black";
  const linkActive =
    "bg-green-600 text-white dark:bg-green-600 dark:text-black dark:border-black";

  return (
    <nav className="p-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 fixed w-full top-0 left-0 shadow-md z-50 opacity-90">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="flex items-center font-bold text-3xl">
          MuthuGanesh
          &nbsp;
          <PiCodeLight className="text-yellow-400 dark:text-red-600 text-3xl" />
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-20 md:justify-around">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={1500}
                offset={-70}
                spy={true}
                onSetActive={() => setActive(item.to)}
                className={`${linkBase} p-2 ${
                  active === item.to ? linkActive : linkInactive
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-red-600 dark:text-gray-900 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <AlignRight size={24} /> : <AlignLeft size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="flex flex-col justify-self-end gap-4 mt-4 md:hidden bg-transparent text-white dark:text-black">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={3000}
                offset={-70}
                spy={true}
                onSetActive={() => setActive(item.to)}
                className={`${linkBase} p-1 ${
                  active === item.to ? linkActive : linkInactive
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
