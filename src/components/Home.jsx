import React from 'react';
import { motion } from 'framer-motion';

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
    <main className="bg-[var(--background)] text-[var(--text)] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative max-w-7xl mx-auto py-16 px-6 text-center bg-gradient-to-b from-[var(--background)] to-[var(--secondary)]/20"
        id="home"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text)] mb-4 font-['Roboto']">
            Welcome to Mandeep Nain & Associates
          </h1>
          <p className="text-lg md:text-xl text-[var(--primary)] mb-6 font-['Roboto'] font-medium">
            Simplifying Tax Compliance for Your Business Success
          </p>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-['Roboto'] leading-relaxed">
            Your trusted consultancy for expert guidance on income tax and GST services. We are committed to providing accurate, timely, and tailored solutions to meet your business needs.
          </p>
          <div className="text-sm font-semibold text-[var(--text)] mb-8 uppercase tracking-wide">
            GSTIN: 06BWBPM7456C1ZM
          </div>
        </motion.div>
        <div className="relative w-full h-72 md:h-96 mb-8 rounded-xl shadow-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Tax consultancy professional workspace"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/70 to-transparent"></div>
          <p className="absolute bottom-4 left-0 right-0 text-[var(--background)] text-lg md:text-xl font-semibold font-['Roboto'] z-10">
            Expert Taxation & Consultancy Services
          </p>
        </div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="bg-[var(--accent)] text-[var(--background)] px-6 py-3 rounded-lg text-base font-semibold font-['Roboto'] hover:bg-[var(--primary)] transition-colors duration-300 shadow-md"
          >
            Contact Us
          </a>
          <a
            href="#contact"
            className="bg-[var(--primary)] text-[var(--background)] px-6 py-3 rounded-lg text-base font-semibold font-['Roboto'] hover:bg-[var(--accent)] transition-colors duration-300 shadow-md"
          >
            Book a Consultation
          </a>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 bg-[var(--background)]">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center text-[var(--text)] mb-8 font-['Roboto']"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[var(--background)] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[var(--secondary)]/50 bg-gradient-to-br from-[var(--background)] to-[var(--secondary)]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2 font-['Roboto']">{item.title}</h3>
              <p className="text-sm text-[var(--text)] opacity-80 font-['Roboto'] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto py-12 px-6 bg-[var(--secondary)]/10">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center text-[var(--text)] mb-8 font-['Roboto']"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-[var(--background)] p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[var(--secondary)]/50 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={`${service.title} illustration`}
                className="w-full h-40 object-cover rounded-t-xl mb-4 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.src = fallbackImage; }}
              />
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2 font-['Roboto']">{service.title}</h3>
              <p className="text-sm text-[var(--text)] opacity-80 font-['Roboto'] leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Summary */}
      <section className="bg-[var(--secondary)] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-full md:w-1/2 h-64 md:h-80 rounded-xl shadow-lg overflow-hidden"
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
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)] mb-4 font-['Roboto']">
              About Mandeep Nain & Associates
            </h2>
            <p className="text-base text-[var(--text)] mb-4 font-['Roboto'] leading-relaxed">
              Based in Panchkula, Haryana (SCO-45, Cabin No. 20, Sector-11, 2nd Floor, PIN: 134109), Mandeep Nain & Associates, led by Mandeep Kumar, is a registered GST consultancy (effective 01/01/2024). We specialize in income tax and GST compliance, ensuring your business thrives.
            </p>
            <p className="text-sm text-[var(--text)] opacity-80 font-['Roboto'] leading-relaxed">
              Our mission is to deliver accurate and timely tax solutions tailored to your needs, backed by our expertise and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center text-[var(--text)] mb-8 font-['Roboto']"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[var(--background)] p-6 rounded-xl shadow-md border border-[var(--secondary)]/50 hover:bg-[var(--secondary)]/5 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-[var(--text)] mb-4 italic font-['Roboto'] leading-relaxed">"{testimonial.quote}"</p>
              <p className="text-sm font-semibold text-[var(--primary)] font-['Roboto']">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 bg-[var(--background)]">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center text-[var(--text)] mb-8 font-['Roboto']"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Quick Links
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="bg-[var(--primary)] text-[var(--background)] p-4 rounded-lg text-center text-sm font-semibold font-['Roboto'] hover:bg-[var(--accent)] transition-colors duration-300 shadow-md"
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
      <section className="bg-[var(--primary)] py-12 px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--background)] mb-4 font-['Roboto']">
            Ready to Simplify Your Tax Compliance?
          </h2>
          <p className="text-base text-[var(--background)] mb-6 font-['Roboto'] leading-relaxed">
            Contact us today to schedule a consultation and let our experts guide you through income tax and GST solutions tailored for your business.
          </p>
          <a
            href="#contact"
            className="bg-[var(--accent)] text-[var(--background)] px-8 py-4 rounded-lg text-lg font-semibold font-['Roboto'] hover:bg-[var(--secondary)] transition-colors duration-300 shadow-md"
          >
            Get Started Now
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;