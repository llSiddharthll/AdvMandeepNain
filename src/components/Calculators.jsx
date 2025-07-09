import { useState, useRef } from 'react'
import { FiDollarSign, FiUser } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import GstCalculator from './Calculators/GstCalculator'
import IncomeTaxCalculator from './Calculators/IncomeTaxCalculator'

export default function Calculators() {
  const [activeTab, setActiveTab] = useState('gst')
  const containerRef = useRef()
  const tabRef = useRef()

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  // Animation variants for tabs
  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  }

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[var(--background)] p-4 flex items-center justify-center"
      style={{ '--background': '#f8fafa' }}
    >
      <div className="max-w-xl w-full bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-[var(--primary)]">
          Tax Calculator Suite
        </h1>

        <motion.div 
          ref={tabRef} 
          className="flex bg-[var(--secondary)] rounded-lg overflow-hidden shadow-inner"
        >
          <motion.button
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            onClick={() => setActiveTab('gst')}
            className={`flex-1 py-3 text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'gst'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'text-[var(--text)] hover:bg-[var(--accent)]'
            }`}
          >
            <FiDollarSign className="text-lg" />
            <span>GST Calculator</span>
          </motion.button>
          <motion.button
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            onClick={() => setActiveTab('income')}
            className={`flex-1 py-3 text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'income'
                ? 'bg-[var(--primary)] text-white shadow-md'
                : 'text-[var(--text)] hover:bg-[var(--accent)]'
            }`}
          >
            <FiUser className="text-lg" />
            <span>Income Tax Calculator</span>
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mt-6"
          >
            {activeTab === 'gst' ? <GstCalculator /> : <IncomeTaxCalculator />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}