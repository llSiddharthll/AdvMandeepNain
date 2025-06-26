import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from './Home/Testimonials';
import Services from './Home/Services';

// Fallback image function
const fallbackImage = 'https://via.placeholder.com/600x400?text=Image+Not+Available';

const Home = () => {
  const services = [
    {
      title: 'Income Tax Services',
      description: 'Expert e-filing, TDS returns, tax planning, and HRA claim assistance for individuals and businesses.',
      icon: '📊',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'GST Services',
      description: 'Seamless GST registration, return filing, input tax credit claims, and e-way bill compliance.',
      icon: '🧾',
      image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Consultancy Services',
      description: 'Tailored tax audit support, composition scheme advice, and guidance for freelancers under Section 44ADA.',
      icon: '🤝',
      image: 'https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const testimonials = [
    {
      quote: 'Mandeep Nain & Associates made my GST registration seamless and stress-free!',
      author: 'Amit Sharma, Small Business Owner',
    },
    {
      quote: 'Their expertise in income tax filing saved me time and ensured compliance.',
      author: 'Priya Gupta, Freelancer',
    },
  ];

  const whyChooseUs = [
    { title: 'Expertise', description: 'Led by Mandeep Kumar, with extensive experience in tax laws.', icon: '🎓' },
    { title: 'Tailored Solutions', description: 'Customized strategies to meet your unique business needs.', icon: '🔧' },
    { title: 'Timely Service', description: 'Prompt and accurate filing to avoid penalties.', icon: '⏰' },
  ];

  const quickLinks = [
    { href: '#resources', label: 'Tax Calculators' },
    { href: '#resources', label: 'GST Guides' },
    { href: '#blog', label: 'Latest Tax Updates' },
    { href: '#contact', label: 'Get in Touch' },
  ];

  return (
    <main className="bg-[var(--background)] text-[var(--text)] min-h-screen font-['Roboto']">
      {/* Hero Section */}
      <section className="relative h-screen bg-[url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200)] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--text)]/20 to-[var(--text)]/80"></div>
        <div className="relative z-10 backdrop-blur-sm flex h-full items-center justify-center text-center px-4 py-16">
          <motion.div
            className="max-w-4xl mx-auto "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Mandeep Nain & Associates
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-6 font-medium">
              Simplifying Tax Compliance for Your Business Success
            </p>
            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Your trusted partner for expert income tax and GST services, delivering precise, timely, and customized solutions.
            </p>
            <div className="text-md sm:text-base text-white/80 uppercase tracking-wide mb-8">
              GSTIN: 06BWBPM7456C1ZM
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="bg-[var(--accent)] text-[var(--text)] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[var(--primary)] transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href="#contact"
                className="bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[var(--accent)] hover:text-[var(--text)] transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

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
      {/* <section className="max-w-7xl mx-auto py-16 px-6 bg-[var(--secondary)]/5">
        <motion.h2
          className="text-3xl font-bold text-center text-[var(--text)] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--secondary)]/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={`${service.title} illustration`}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
              <div className="text-4xl mb-4 text-[var(--accent)]">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{service.title}</h3>
              <p className="text-base text-[var(--text)]/80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
      <Services/>

      {/* About Summary */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-[var(--secondary)]/10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Professional tax consultancy team"
              className="w-full h-full object-cover"
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
      <Testimonials/>

      {/* Quick Links Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 bg-[var(--secondary)]/5">
        <motion.h2
          className="text-3xl font-bold text-center text-[var(--text)] mb-12"
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
              className="bg-[var(--primary)] text-white p-4 rounded-lg text-center text-base font-semibold hover:bg-[var(--accent)] transition-colors duration-300 shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[var(--primary)] py-16 px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Simplify Your Tax Compliance?</h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Contact us today to schedule a consultation and let our experts guide you through income tax and GST solutions tailored for your business.
          </p>
          <motion.a
            href="#contact"
            className="bg-[var(--accent)] text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-[var(--secondary)] transition-colors duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;