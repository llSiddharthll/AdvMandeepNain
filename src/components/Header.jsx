import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/header.css";

export default function Header2() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/gst-compliance", label: "GST Compliance" },
    { to: "/resources", label: "Resources" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="flex justify-between items-center bg-white text-[var(--background)] sticky top-0 z-50 shadow-md">
        {/* Logo Section */}
        <div className="w-80 lg:w-96 h-16 md:h-[6.25rem] -ms-4">
          <div className="bg-[var(--secondary)] h-full text-white px-6 py-2 font-bold text-lg skew-x-[-20deg]">
            <div className="skew-x-[20deg] flex items-center justify-center gap-4 text-[var(--text)]">
              <img
                src="/logo.png"
                alt="Mandeep And Nain Associates"
                className="h-12 md:h-20"
              />
              <span className="text-sm md:text-md">
                Mandeep Nain <br /> And Associates
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="block lg:hidden px-6">
          <button onClick={() => setIsMobileOpen(true)}>
            <FaBars className="text-2xl text-[var(--text)]" />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex flex-col w-full">
          <div className="flex justify-between items-center px-4 md:px-8 py-2 bg-[var(--text)] text-white text-sm">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs md:text-sm">
              <span>+91-98765-43210</span>
              <span>advmandeepnain@gmail.com</span>
            </div>
            <div className="flex gap-4 items-center justify-end">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          <nav>
            <div className="w-full px-4 py-3 flex justify-end space-x-4 font-medium text-gray-700">
              {navItems.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md transition ${isActive
                      ? "bg-[var(--accent)]/30 text-[var(--text)]"
                      : "hover:bg-[var(--accent)]/20"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay and Slide Menu */}
      <div
        className={`fixed inset-0 bg-primary/20 bg-opacity-40 transition-opacity duration-300 z-40 ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setIsMobileOpen(false)}>
            <IoMdClose className="text-xl text-[var(--text)]" />
          </button>
        </div>
        <div className="flex flex-col justify-start items-start lg:justify-between lg:items-center gap-4 lg:gap-0 px-4 lg:px-8 py-2 bg-[var(--text)] text-white text-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-6 text-xs lg:text-sm">
            <span>+91-98765-43210</span>
            <span>advmandeepnain@gmail.com</span>
          </div>
          <div className="flex gap-4 items-center justify-end">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
        <nav className="flex flex-col px-4 py-4 space-y-3 text-[var(--text)] font-medium">
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition ${isActive
                  ? "bg-[var(--accent)]/30 text-[var(--text)]"
                  : "hover:bg-[var(--accent)]/20"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
