import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#gst', label: 'GST Compliance' },
        { href: '#resources', label: 'Resources' },
        { href: '#blog', label: 'Blog' },
        { href: '#contact', label: 'Contact' },
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
                                src="/logo_light.jpg"
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
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-['Poppins'] font-medium text-[var(--background)] hover:text-[var(--accent)] transition-all duration-300"
                                whileHover={{ scale: 1, color: 'var(--accent)', marginLeft: '0.5rem' }}
                            >
                                {link.label}
                            </motion.a>
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
                        <p className="text-sm font-['Poppins'] text-[var(--background)] mb-2">Email: info@mandeepnain.com</p>
                        <p className="text-sm font-['Poppins'] text-[var(--background)] mb-4">Phone: +91-98765-43210</p>
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
                        <div className="mt-4">
                            <input
                                type="email"
                                placeholder="Subscribe to Newsletter"
                                className="w-full p-2 rounded-lg text-[var(--background)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Legal & Copyright */}
                <div className="mt-10 text-center border-t border-[var(--primary)]/20 pt-6">
                    <p className="text-xs font-['Poppins'] text-[var(--background)]">
                        <motion.a
                            href="/privacy"
                            className="hover:text-[var(--accent)] transition-colors duration-300"
                            whileHover={{ underline: 'true', color: 'var(--accent)' }}
                        >
                            Privacy Policy
                        </motion.a>{' | '}
                        <motion.a
                            href="/terms"
                            className="hover:text-[var(--accent)] transition-colors duration-300"
                            whileHover={{ underline: 'true', color: 'var(--accent)' }}
                        >
                            Terms of Service
                        </motion.a>
                    </p>
                    <p className="text-xs mt-2 font-['Poppins'] text-[var(--background)]">© 2025 Mandeep Nain & Associates. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;