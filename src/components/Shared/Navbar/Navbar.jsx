// components/Navbar.jsx
import { useState, useEffect } from "react";
import logo from "../../../../src/assets/icons/Copilot_20260106_225030-removebg-preview.jpg.png";
import { toast, ToastContainer, Zoom } from "react-toastify";

const links = [
  { name: "Home", href: "#home", underConstruction: false },
  { name: "About", href: "#about", underConstruction: true },
  { name: "Gallery", href: "#gallery", underConstruction: true },
  { name: "Features", href: "#features", underConstruction: true },
  { name: "Contact", href: "#contact", underConstruction: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleUnderConstruction = (e) => {
    e.preventDefault();
    toast.info("Feature in progress!", {
      position: "top-center",
      autoClose: 300,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`font-montserrat fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled
          ? "backdrop-blur shadow-sm "
          : "bg-gradient-to-r from-[#1a1f36] to-[#2e3a59] "
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2">
            <img className="w-[60px]" src={logo} alt="Logo" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) =>
                  link.underConstruction ? handleUnderConstruction(e) : null
                }
                className={` text-sm font-semibold  hover:text-yellow-600 dark:text-gray-300 dark:hover:text-yellow-400 transition-colors  text-white `}>
                {link.name}
              </a>
            ))}

            <a
              href="#get-started"
              className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold
                hover:bg-indigo-700 shadow-sm  bg-gradient-to-r from-[#f6c90e] to-[#f4b400] text-[#1a1f36] hover:from-[#f4b400] hover:to-[#f6c90e] transition duration-300"
            >
              Get started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-4 space-y-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.underConstruction) {
                  handleUnderConstruction(e);
                } else {
                  setOpen(false);
                }
              }}
              className="block rounded-md px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="block rounded-md px-3 py-2  bg-gradient-to-r from-[#f6c90e] to-[#f4b400] text-[#1a1f36] font-semibold  shadow-lg hover:from-[#f4b400] hover:to-[#f6c90e] transition duration-300"
          >
            Get started
          </a>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
}
