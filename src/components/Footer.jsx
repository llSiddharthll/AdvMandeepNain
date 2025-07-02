import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Changed from Link to NavLink

const Footer = () => {
  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/gst-compliance', label: 'GST Compliance' },
    { to: '/resources', label: 'Resources' },
    { to: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: '#', icon: FaFacebook, label: 'Facebook' },
    { href: '#', icon: FaXTwitter, label: 'Twitter' },
    { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[var(--text)] text-[var(--background)] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--primary)]/10 to-[var(--secondary)]/20 opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <motion.div
            className="bg-white/10 p-6 rounded-xl border border-[var(--primary)]/20 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center md:justify-start mb-6">
              <img
                src="/logo_light.jpeg"
                alt="Mandeep Nain & Associates Logo"
                className="h-14 w-14 rounded-lg object-cover border-2 border-[var(--accent)]"
              />
            </div>
            <p className="text-sm font-['Poppins'] font-semibold mb-2 text-[var(--accent)]">GSTIN: 06BWBPM7456C1ZM</p>
            <p className="text-sm font-['Poppins'] text-[var(--background)] mb-2">Legal Name: Mandeep Kumar</p>
            <p className="text-sm font-['Poppins'] text-[var(--background)]">Trade Name: Mandeep Nain & Associates</p>
            <p className="text-xs mt-4 font-['Poppins'] text-[var(--accent)]">Panchkula, Haryana (SCO-45, Cabin No. 20, Sector-11, 2nd Floor, PIN: 134109)</p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="bg-white/10 p-6 rounded-xl border border-[var(--primary)]/20 shadow-md flex flex-col justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.to} // Changed key to use `to` for uniqueness
                whileHover={{ scale: 1, marginLeft: '0.5rem' }}
              >
                <NavLink
                  to={link.to} // Use `to` prop instead of `href`
                  end={link.end} // Apply `end` for exact matching (e.g., for Home)
                  className={({ isActive }) =>
                    `text-sm font-['Poppins'] font-medium text-[var(--background)] hover:text-[var(--accent)] transition-all duration-300 ${
                      isActive ? 'text-[var(--accent)]' : ''
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>

          {/* Contact & Social */}
          <motion.div
            className="bg-white/10 p-6 rounded-xl border border-[var(--primary)]/20 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-['Poppins'] font-semibold mb-2 text-[var(--accent)]">Get in Touch</p>
            <p className="text-sm font-['Poppins'] text-[var(--background)] mb-2">
              Email:{' '}
              <a
                href="mailto:advmandeepnain@gmail.com"
                className="hover:text-[var(--accent)] transition-all duration-300"
              >
                advmandeepnain@gmail.com
              </a>
            </p>
            <p className="text-sm font-['Poppins'] text-[var(--background)] mb-4">
              Phone:{' '}
              <a
                href="tel:+919729630697"
                className="hover:text-[var(--accent)] transition-all duration-300"
              >
                +91 97296 30697
              </a>
            </p>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-[var(--accent)] hover:text-[var(--secondary)] transition-all duration-300 flex items-center"
                  whileHover={{ scale: 1.3 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
            <div className="mt-4 flex gap-2 items-center">
              <input
                type="email"
                placeholder="Subscribe to Newsletter"
                className="w-full p-2 rounded-lg text-[var(--background)] bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
              <span className="h-10 w-12 flex items-center justify-center rounded-lg text-[var(--background)] bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
                <FaArrowRight className="text-2xl" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-10 text-center border-t border-[var(--primary)]/20 pt-6">
          <p className="text-xs font-['Poppins'] text-[var(--background)]">
            <motion.a
              href="/privacy-policy"
              className="hover:text-[var(--accent)] transition-colors duration-300"
              whileHover={{ color: 'var(--accent)' }}
            >
              Privacy Policy
            </motion.a>{' | '}
            <motion.a
              href="/terms-and-conditions"
              className="hover:text-[var(--accent)] transition-colors duration-300"
              whileHover={{ color: 'var(--accent)' }}
            >
              Terms of Service
            </motion.a>
          </p>
          <p className="text-xs mt-2 font-['Poppins'] text-[var(--background)]">© 2025 Mandeep Nain & Associates. All rights reserved.</p>
          <p className="text-xs mt-2 font-['Poppins'] text-[var(--background)]">
            Powered by Siddharth Tiwari :)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;