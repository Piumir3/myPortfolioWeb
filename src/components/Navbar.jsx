import { useEffect, useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0d] shadow-lg border-b border-gray-800"
          : "bg-[#0a0a0a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-cyan-400 transition"
          onClick={() => setActive("")}
        >
          <span className="text-cyan-400">My</span>Portfolio
        </a>

        {/* Desktop Links */}
        <ul className="hidden sm:flex space-x-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`text-base font-medium ${
                  active === nav.title ? "text-cyan-400" : "text-gray-200"
                } hover:text-white transition`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          toggle ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-[#121212] px-6 py-4`}
      >
        <ul className="flex flex-col space-y-4">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`text-base font-medium ${
                  active === nav.title ? "text-cyan-400" : "text-gray-200"
                } hover:text-white transition`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
