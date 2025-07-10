import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from './Home/Testimonials';
import Services from './Home/Services';
import Hero from './Home/Hero';
import { FaCalculator, FaFileAlt, FaRegQuestionCircle, FaPhone } from 'react-icons/fa';
import Cta from './Cta';

// Fallback image function
const fallbackImage = 'https://via.placeholder.com/600x400?text=Image+Not+Available';

const Home = () => {


  const whyChooseUs = [
    { title: 'Expertise', description: 'Led by Mandeep Kumar, with extensive experience in tax laws.', icon: '🎓' },
    { title: 'Tailored Solutions', description: 'Customized strategies to meet your unique business needs.', icon: '🔧' },
    { title: 'Timely Service', description: 'Prompt and accurate filing to avoid penalties.', icon: '⏰' },
  ];

  const quickLinks = [
    { label: 'Our Services', href: '/services', icon: <FaFileAlt className="w-6 h-6 mx-auto mb-2" /> },
    { label: 'GST Compliance', href: '/gst-compliance', icon: <FaCalculator className="w-6 h-6 mx-auto mb-2" /> },
    { label: 'Calculators', href: '/calculators', icon: <FaCalculator className="w-6 h-6 mx-auto mb-2" /> },
    { label: 'Contact Us', href: '/contact', icon: <FaPhone className="w-6 h-6 mx-auto mb-2" /> },
  ];


  return (
    <main className="bg-[var(--background)] text-[var(--text)] min-h-screen font-['Roboto']">
      {/* Hero Section */}

      <Hero />


      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-[var(--background)]">
        <motion.h2
          className="text-3xl font-bold text-center text-[var(--text)] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--secondary)]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4 text-[var(--accent)]">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{item.title}</h3>
              <p className="text-base text-[var(--text)]/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}

      <Services />

      {/* About Summary */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-[var(--secondary)]/10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-full md:w-1/2 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/about.png"
              alt="Professional tax consultancy team"
              className="w-full h-full"
              onError={(e) => { e.target.src = fallbackImage; }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[var(--text)] mb-6">About Mandeep Nain & Associates</h2>
            <p className="text-lg text-[var(--text)] mb-4 leading-relaxed">
              Based in Panchkula, Haryana (SCO-45, Cabin No. 20, Sector-11, 2nd Floor, PIN: 134109), Mandeep Nain & Associates, led by Mandeep Kumar, is a registered GST consultancy (effective 01/01/2024). We specialize in income tax and GST compliance, ensuring your business thrives.
            </p>
            <p className="text-base text-[var(--text)]/80 leading-relaxed">
              Our mission is to deliver accurate and timely tax solutions tailored to your needs, backed by our expertise and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}

      <motion.h2
        className="text-3xl font-bold text-center text-[var(--text)] mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>
      <Testimonials />

      {/* Quick Links Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-gray-100">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Quick Links
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="group bg-white text-gray-900 p-6 rounded-xl text-center font-semibold hover:bg-[var(--secondary)]/50 transition-colors duration-300 shadow-md hover:shadow-xl flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[var(--accent)] group-hover:text-[var(--primary)] transition-colors duration-300">{link.icon}</span>
              <span className="mt-2">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </section>
      {/* Final CTA Section */}
      <Cta/>
    </main>
  );
};

export default Home;