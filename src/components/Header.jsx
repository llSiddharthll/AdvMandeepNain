import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#gst', label: 'GST Compliance' },
    { href: '#resources', label: 'Resources' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 w-full px-6 py-4 bg-[var(--secondary)]/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logo.png"
            alt="Mandeep Nain & Associates Logo"
            className="h-16 w-16 rounded-full object-cover"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative text-[var(--text)] text-base font-['Poppins'] font-medium hover:text-[var(--accent)] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent)]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-[var(--background)]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-16 left-0 w-full bg-[var(--primary)]/90 backdrop-blur-md p-6 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--background)] text-base font-['Poppins'] font-medium hover:text-[var(--accent)] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;