import { NavLink } from "react-router-dom";
import { useState } from "react";

const menu = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/aboutus" },
  { label: "Events / What’s On", path: "/event" },
  { label: "Contact", path: "/contactus" },
  // { label: "Walkthrough", path: "/walkthrough" },
  // { label: "Galleries", path: "/galleries" },
  { label: "Join SpringWorks", path: "/membership" },
  { label: "Corporate", path: "/corporate" },
  // { label: "Shop", path: "/shop" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 font-bold z-50 backdrop-blur-xl bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto  py-6 flex items-center justify-between">

        {/* LOGO */}
        <NavLink
          to="/"
          className="text-lg font-extrabold tracking-widest uppercase text-white hover:scale-105 transition"
        >
          SpringWorks
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {menu.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-widest transition-all duration-300
                  ${isActive ? "text-yellow-400" : "text-white/90 hover:text-yellow-400"}`
                }
              >
                {label}

                <span
                  className={({ isActive }) =>
                    `absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`
                  }
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1 border border-white/30 rounded-lg"
        >
          <span className="w-5 h-[2px] bg-white"></span>
          <span className="w-5 h-[2px] bg-white"></span>
          <span className="w-5 h-[2px] bg-white"></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-4 space-y-4 border-t border-white/10 bg-black/90 backdrop-blur-xl">
          {menu.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm uppercase tracking-widest transition
                  ${isActive ? "text-yellow-400" : "text-white/80 hover:text-yellow-400"}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}
