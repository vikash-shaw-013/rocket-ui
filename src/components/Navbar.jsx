import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import icon from "../assets/icon.png";
import Button from "./Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  

  const links = ["about", "course", "contact"]; // Nav links

  // Toggle mobile menu
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Reusable navigation links

  const NavLinks = ({ isMobile = false, onClick }) => (
    <ul
      className={`${
        isMobile
          ? "space-y-6 text-2xl font-medium text-[var(--color-text)]"
          : "hidden md:flex gap-6"
      }`}
    >
      {links.map((link) => (
        <li key={link}>
          <Link
            to={link}
            smooth
            spy={true}
            duration={500}
            offset={-70}
            activeClass="active-nav"
            className="capitalize cursor-pointer transition-all border-b-2 border-transparent hover:border-[var(--color-accent-from)]"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className="sticky top-0 left-0 w-full z-50 text-white]
        backdrop-blur-md border-b border-white shadow-lg transition-all duration-300
        bg-[var(--glass-bg)]"
    >
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo - scrolls to top/home */}
        <Link to="home" smooth duration={500} offset={-70}>
          <img src={icon} alt="Logo" className="h-16 cursor-pointer" />
        </Link>

        {/* Mobile menu icon and theme toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleNav}>
            {navOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <NavLinks />
  
        <Button button_text="Apply Now" className="px-4 py-2" />
      </div>

      {/* Mobile menu dropdown that pushes content down */}
      {navOpen && (
        <div className="md:hidden w-full bg-[var(--color-bg)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300">
          <div className="p-6 flex flex-col items-center">
            <NavLinks isMobile={true} onClick={() => setNavOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
