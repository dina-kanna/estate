
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Menu,
  X,
  Home,
  Building2,
  KeyRound,
  Info,
  Phone,
  UserRound,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let user = null;

  try {
    user = JSON.parse(
      localStorage.getItem("estatehaven_user") || "null"
    );
  } catch {
    user = null;
  }

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Buy", path: "/properties?purpose=Buy", icon: Building2 },
    { name: "Rent", path: "/Rent", icon: KeyRound },
    { name: "Sell", path: "/sell", icon: Sparkles },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  const closeMenu = () => setIsOpen(false);

  const linkClass = ({ isActive }) =>
    `relative flex items-center gap-1.5 whitespace-nowrap py-2 font-semibold transition-all duration-300 ${
      isActive
        ? "text-[#c5a36a]"
        : "text-white/75 hover:text-[#c5a36a]"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="hidden sm:block bg-[#c5a36a] py-2 text-center text-[10px] md:text-[11px] font-bold tracking-[2px] text-[#102a25]">
        <span className="inline-flex items-center gap-2">
          <Sparkles size={13} />
          FIND YOUR DREAM HOME WITH ESTATE HAVEN
          <Sparkles size={13} />
        </span>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="border-b border-white/10 bg-[#102a25]">

        <div className="mx-auto flex max-w-full items-center justify-between gap-3 px-4 py-3 md:px-5 lg:px-8 lg:py-4">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2 md:gap-2.5"
          >
            <div className="flex h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-[#c5a36a] text-[#102a25] shadow-lg">
              <Building2 size={24} />
            </div>

            <div>
              <h2 className="text-xl md:text-xl lg:text-2xl font-extrabold tracking-tight text-white">
                Estate<span className="text-[#c5a36a]">Haven</span>
              </h2>

              <p className="mt-0.5 text-[8px] md:text-[9px] font-semibold uppercase tracking-[2px] md:tracking-[3px] text-white/50">
                Find Your Place
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-3 lg:gap-5 xl:gap-7">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `${linkClass({ isActive })} text-[12px] lg:text-sm`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#c5a36a] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

          </div>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden md:flex shrink-0 items-center gap-2 lg:gap-3">

            <Link
              to={user ? "/profile" : "/login"}
              className="flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-2 lg:gap-2 lg:px-4 lg:py-2.5 text-xs lg:text-sm font-semibold text-white transition hover:border-[#c5a36a] hover:text-[#c5a36a]"
            >
              <UserRound size={16} />
              <span>{user ? "Profile" : "Login"}</span>
            </Link>

            <Link
              to="/sell"
              className="group flex items-center gap-1 rounded-full bg-[#c5a36a] px-3 py-2.5 lg:gap-2 lg:px-5 lg:py-3 text-xs lg:text-sm font-extrabold text-[#102a25] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              <span>List Property</span>
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-[#c5a36a] hover:text-[#c5a36a]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-white/10 bg-[#102a25] transition-all duration-300 md:hidden ${
            isOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }`}
        >

          <div className="mx-auto max-w-full space-y-2 px-5 py-5">

            <p className="mb-4 px-3 text-[10px] font-bold tracking-[3px] text-[#c5a36a]">
              EXPLORE ESTATE HAVEN
            </p>

            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[#c5a36a] text-[#102a25]"
                        : "text-white/75 hover:bg-white/5 hover:text-[#c5a36a]"
                    }`
                  }
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} />
                    {link.name}
                  </span>

                  <ArrowUpRight size={16} />
                </NavLink>
              );
            })}

            {/* MOBILE ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5">

              <Link
                to={user ? "/profile" : "/login"}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3 text-sm font-bold text-white transition hover:border-[#c5a36a] hover:text-[#c5a36a]"
              >
                <UserRound size={17} />
                {user ? "Profile" : "Login"}
              </Link>

              <Link
                to="/sell"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#c5a36a] py-3 text-sm font-extrabold text-[#102a25] transition hover:bg-white"
              >
                List Property
                <ArrowUpRight size={16} />
              </Link>

            </div>

            <p className="pt-4 text-center text-[10px] tracking-widest text-white/30">
              ESTATE HAVEN · YOUR HOME, YOUR STORY
            </p>

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
