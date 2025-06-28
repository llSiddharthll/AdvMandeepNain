import { motion } from 'framer-motion';
import { FaCalculator } from 'react-icons/fa';

export default function Cta() {
  return (
    <div className="w-full mb-10">
      <div className="max-w-7xl mx-auto pt-14 px-2 md:px-6">
        <motion.div
          className="bg-gradient-to-r from-[var(--primary)] via-[var(--primary)] to-[var(--accent)] py-14 px-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div>
              <motion.h1
                className="text-white text-3xl md:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Streamline Your Taxes with Mandeep Nain & Associates
              </motion.h1>
              <motion.p
                className="text-gray-200 text-lg mt-4 max-w-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Expert GST and income tax solutions to ensure compliance and drive your business forward. Start today!
              </motion.p>
            </div>
            <div className="relative flex items-center justify-end">
              <motion.a
                href="/contact"
                className="flex items-center gap-2 py-4 px-6 bg-white text-[var(--primary)] rounded-lg font-semibold text-lg shadow-md hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCalculator className="w-5 h-5" />
                Book a Consultation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}