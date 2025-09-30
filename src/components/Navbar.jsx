import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/logo.svg";
import iconHamburger from "/assets/shared/icon-hamburger.svg";
import iconClose from "/assets/shared/icon-close.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/destination", label: "Destination" },
    { to: "/crew", label: "Crew" },
    { to: "/technology", label: "Technology" },
  ];
  return (
    <div>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-[80rem] mx-auto flex items-center gap-6 px-6 py-6 relative">
          {/* Logo */}
          <img
            src={logo}
            alt="site-logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />

          {/* Divider for desktop only */}
          <div className="hidden lg:flex flex-1">
            <div className="h-px bg-white/20 w-full ml-6"></div>
          </div>

          {/* Desktop / Tablet Nav */}
          <nav
            className="
        hidden md:flex items-center gap-10 ml-auto
        bg-white/5 backdrop-blur-xl
        px-10 py-6 rounded-l-full
      "
          >
            {links.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className="
            flex items-center gap-3 uppercase tracking-widest text-white/80
            hover:text-white transition
          "
              >
                <span className="font-light text-white/40">
                  {String(i).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/40"
            onClick={() => setOpen(!open)}
          >
            <img
              src={open ? iconClose : iconHamburger}
              alt="menu toggle"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Dark overlay when menu is open */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 z-40"
          />
        )}

        {/* Mobile slide-in menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white/5 backdrop-blur-xl p-8 z-50
      transform transition-transform duration-300 md:hidden
      ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="mt-12 flex flex-col gap-8">
            {links.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 text-lg uppercase tracking-widest text-white/90 hover:text-white"
              >
                <span className="text-white/40">
                  {String(i).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
