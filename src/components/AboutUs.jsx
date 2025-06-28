import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaUserTie, FaMapMarkerAlt, FaCertificate, FaAward, FaQuoteLeft } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Particle Background Component
const Particles = () => {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-[var(--accent)]/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Section Component
const Section = ({ icon, title, text, imageUrl, reverse = false, refProp, inView }) => (
  <motion.section
    ref={refProp}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={staggerContainer}
    className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-28"
  >
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch`}>
      {/* Image Container */}
      <motion.div
        variants={fadeInUp}
        className="relative group w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] lg:w-1/2"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent rounded-2xl sm:rounded-3xl opacity-75 group-hover:opacity-90 transition-opacity duration-500" />
      </motion.div>

      {/* Text Card */}
      <motion.div
        variants={fadeInUp}
        className="backdrop-blur-lg bg-[var(--secondary)]/20 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-[var(--primary)]/15 w-full lg:w-1/2 h-auto min-h-64 sm:min-h-80 md:min-h-96 lg:h-[28rem] flex flex-col justify-start"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Poppins'] text-[var(--primary)] flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {icon} {title}
        </h2>
        <p className="text-[var(--text)] font-['Poppins'] text-base sm:text-lg leading-relaxed">{text}</p>
      </motion.div>
    </div>
  </motion.section>
);

// Timeline Component
const Timeline = ({ refProp, inView }) => (
  <motion.section
    ref={refProp}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    variants={staggerContainer}
    className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 relative"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Poppins'] text-[var(--primary)] text-center mb-8 sm:mb-10 md:mb-12 flex items-center justify-center gap-3 sm:gap-4">
      <FaAward className="text-[var(--accent)] text-xl sm:text-2xl md:text-3xl" /> Our Journey
    </h2>
    <div className="relative max-w-full sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] hidden sm:block"></div>
      {[
        { year: '2020', event: 'Founded Mandeep Nain & Associates as a proprietorship.' },
        { year: '2022', event: 'Expanded to offer comprehensive GST and tax solutions.' },
        { year: '2024', event: 'Secured GST registration (GSTIN: 06BWBPM7456C1ZM).' },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className={`flex flex-col sm:flex-row items-center mb-8 sm:mb-12 md:mb-16 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} relative`}
        >
          <div className="w-full sm:w-1/2 px-4 sm:px-8">
            <div className="backdrop-blur-sm bg-[var(--secondary)]/20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary)]">{item.year}</h3>
              <p className="text-[var(--text)] font-['Poppins'] mt-2 text-sm sm:text-base">{item.event}</p>
            </div>
          </div>
          <div className="w-0 sm:w-1/2"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 sm:w-5 h-3 sm:h-5 bg-[var(--accent)] rounded-full border-2 sm:border-4 border-[var(--background)] sm:block hidden"></div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

// Stats Component
const Stats = ({ refProp, inView }) => {
  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '10+', label: 'Years of Expertise' },
    { value: '100%', label: 'Compliance Rate' },
  ];

  return (
    <motion.section
      ref={refProp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className="mb-12 sm:mb-16 md:mb-20 lg:mb-28"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Poppins'] text-[var(--primary)] text-center mb-8 sm:mb-10 md:mb-12">Our Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-full sm:max-w-3xl md:max-w-5xl mx-auto px-4 sm:px-0">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={scaleIn}
            className="backdrop-blur-lg bg-[var(--secondary)]/20 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl text-center border border-[var(--primary)]/15 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--accent)]">{stat.value}</h3>
            <p className="text-[var(--text)] font-['Poppins'] mt-2 sm:mt-3 text-base sm:text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Testimonial Carousel Component
const Testimonials = ({ refProp, inView }) => {
  const testimonials = [
    {
      quote: 'Mandeep Nain & Associates made GST compliance effortless for my business!',
      author: 'Priya Sharma',
      title: 'Small Business Owner',
    },
    {
      quote: 'Their expertise in tax planning saved me significant time and money.',
      author: 'Rahul Verma',
      title: 'Freelancer',
    },
    {
      quote: 'Professional, reliable, and always responsive to our needs.',
      author: 'Anita Singh',
      title: 'Corporate Client',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.section
      ref={refProp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 relative"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Poppins'] text-[var(--primary)] text-center mb-8 sm:mb-10 md:mb-12 flex items-center justify-center gap-3 sm:gap-4">
        <FaQuoteLeft className="text-[var(--accent)] text-xl sm:text-2xl md:text-3xl" /> Client Voices
      </h2>
      <motion.div
        key={current}
        variants={fadeInUp}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-lg bg-[var(--secondary)]/20 p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl max-w-full sm:max-w-2xl md:max-w-3xl mx-auto text-center border border-[var(--primary)]/15"
      >
        <p className="text-[var(--text)] font-['Poppins'] text-base sm:text-lg italic mb-4 sm:mb-6">"{testimonials[current].quote}"</p>
        <p className="text-[var(--primary)] font-['Poppins'] font-semibold text-sm sm:text-base">{testimonials[current].author}</p>
        <p className="text-[var(--text)] font-['Poppins'] text-xs sm:text-sm">{testimonials[current].title}</p>
      </motion.div>
      <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${current === index ? 'bg-[var(--accent)]' : 'bg-[var(--primary)]/30'}`}
          />
        ))}
      </div>
    </motion.section>
  );
};

const AboutUs = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.3 });

  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="relative bg-[var(--background)] min-h-screen overflow-hidden">
      
      <Particles />
      <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header Section */}
        <motion.div
          style={{ y: parallaxY }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-['Poppins'] text-[var(--text)]"
          >
            About Mandeep Nain & Associates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[var(--text)] font-['Poppins'] max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto"
          >
            Transforming tax compliance into a seamless experience with expertise and innovation.
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-8 md:mt-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <a
              href="/contact"
              className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[var(--primary)] text-[var(--background)] font-['Poppins'] font-semibold rounded-full hover:bg-[var(--accent)] transition-colors duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl text-sm sm:text-base"
            >
              Connect With Us
            </a>
          </motion.div>
        </motion.div>

        {/* Firm Profile */}
        <Section
          icon={<FaUserTie className="text-[var(--accent)] text-xl sm:text-2xl md:text-3xl" />}
          title="Firm Profile"
          text="Mandeep Nain & Associates is a trailblazing consultancy dedicated to simplifying income tax and GST compliance. Led by Mandeep Kumar, our proprietorship delivers innovative, client-focused solutions, empowering businesses and individuals to achieve financial clarity and success."
          imageUrl="/a1.jpg"
          refProp={ref1}
          inView={inView1}
        />

        {/* Mission & Vision */}
        <Section
          icon={<FaCertificate className="text-[var(--accent)] text-xl sm:text-2xl md:text-3xl" />}
          title="Mission & Vision"
          text="Mission: To provide precise, timely, and personalized tax solutions that empower our clients to thrive.\nVision: To be India’s premier consultancy, celebrated for expertise, integrity, and simplifying compliance for all."
          imageUrl="/a2.jpg"
          refProp={ref2}
          inView={inView2}
          reverse={true}
        />

        {/* Proprietor Details */}
        <Section
          icon={<FaUserTie className="text-[var(--accent)] text-xl sm:text-2xl md:text-3xl" />}
          title="Meet Our Proprietor"
          text="Mandeep Kumar, the visionary behind Mandeep Nain & Associates, is a tax expert with deep expertise in income tax and GST regulations. Based in Haryana, Mandeep’s strategic insights and dedication deliver tailored solutions for diverse client needs."
          imageUrl="/a3.jpg"
          refProp={ref3}
          inView={inView3}
        />

        {/* Timeline */}
        <Timeline refProp={ref5} inView={inView5} />

        {/* Stats */}
        <Stats refProp={ref6} inView={inView6} />

        {/* Testimonials */}
        <Testimonials refProp={ref7} inView={inView7} />

        {/* Location & Certification */}
        <motion.section
          ref={ref4}
          initial="hidden"
          animate={inView4 ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 relative z-10"
        >
          <motion.h2
            variants={fadeInUp}
            className=" text-md sm:text-3xl md:text-4xl font-extrabold font-['Poppins'] text-[var(--primary)] flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10"
          >
            <FaMapMarkerAlt className="text-[var(--accent)] text-xl sm:text-2xl md:text-3xl" /> 
            <span>Our Location & Certification</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--text)] font-['Poppins'] text-base text-[12px] md:text-lg max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 text-start md:text-center"
          >
            Situated at SCO-45, Cabin No. 20, 2nd Floor, Sector-11, Panchkula, Haryana, PIN: 134109, we are a GST-registered firm with GSTIN <strong>06BWBPM7456C1ZM</strong>. Our registration, issued on January 1, 2024, by Manisha Aggarwal, Excise and Taxation Officer, Panchkula Ward 5, reflects our unwavering commitment to regulatory excellence.
          </motion.p>
          <motion.div variants={fadeInUp} className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6147631684967!2d76.85471631511567!3d30.69414398164847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f94b3b9b3b3b3%3A0x7c8f7b8f7b8f7b8f!2sSector%2011%2C%20Panchkula%2C%20Haryana%20134109%2C%20India!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto"
            ></iframe>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;