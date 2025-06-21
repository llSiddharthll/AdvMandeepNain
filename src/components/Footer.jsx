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
        <footer className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/80 to-[var(--secondary)] text-white py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ffffff20\' fill-opacity=\'0.1\' d=\'M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V64Z\'/%3E%3C/svg%3E')] opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Company Info */}
                    <motion.div
                        className="bg-black/20 p-6 rounded-xl border border-white/20 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center md:justify-start mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-b1bd52206d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                alt="Mandeep Nain & Associates Logo"
                                className="h-14 w-14 rounded-lg object-cover border-2 border-[var(--accent)]"
                            />
                        </div>
                        <p className="text-sm font-['Poppins'] font-semibold mb-2 text-[var(--accent)]">GSTIN: 06BWBPM7456C1ZM</p>
                        <p className="text-sm font-['Poppins'] mb-2">Legal Name: Mandeep Kumar</p>
                        <p className="text-sm font-['Poppins']">Trade Name: Mandeep Nain & Associates</p>
                        <p className="text-xs mt-4 font-['Poppins'] text-[var(--accent)]">Panchkula, Haryana, India</p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.nav
                        className="bg-black/20 p-6 rounded-xl border border-white/20 shadow-lg flex flex-col justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-['Poppins'] font-medium hover:text-[var(--accent)] transition-all duration-300"
                                whileHover={{ scale: 1.1, color: 'var(--accent)' }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.nav>

                    {/* Contact & Social */}
                    <motion.div
                        className="bg-black/20 p-6 rounded-xl border border-white/20 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-['Poppins'] font-semibold mb-2 text-[var(--accent)]">Get in Touch</p>
                        <p className="text-sm font-['Poppins'] mb-2">Email: info@mandeepnain.com</p>
                        <p className="text-sm font-['Poppins'] mb-4">Phone: +91-98765-43210</p>
                        <div className="flex justify-center md:justify-end gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="hover:text-[var(--accent)] transition-all duration-300"
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
                                className="w-full p-2 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Legal & Copyright */}
                <div className="mt-10 text-center border-t border-white/20 pt-6">
                    <p className="text-xs font-['Poppins']">
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
                    <p className="text-xs mt-2 font-['Poppins']">© 2025 Mandeep Nain & Associates. All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;