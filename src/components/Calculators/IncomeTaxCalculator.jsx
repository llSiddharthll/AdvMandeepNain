import { useState, useEffect } from 'react'
import { FiHome, FiHeart, FiDollarSign, FiInfo, FiChevronDown } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState('')
  const [otherIncome, setOtherIncome] = useState('')
  const [ageGroup, setAgeGroup] = useState('<60')
  const [deductions, setDeductions] = useState({
    section80C: '', // PF, PPF, Insurance
    section80D: '', // Medical Insurance
    hra: '', // House Rent Allowance
  })
  const [tax, setTax] = useState(0)
  const [taxableIncome, setTaxableIncome] = useState(0)
  const [regime, setRegime] = useState('old') // 'old' or 'new'
  const [showDeductions, setShowDeductions] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [language, setLanguage] = useState('en') // 'en' or 'hi'

  // Translations
  const translations = {
    en: {
      title: "Income Tax Calculator",
      salary: "Annual Salary (₹)",
      otherIncome: "Other Income (₹)",
      otherIncomePlaceholder: "Interest, rent, etc.",
      ageGroup: "Age Group",
      ageOptions: ["Below 60", "60 - 80", "Above 80"],
      regime: "Tax Regime",
      regimeOptions: ["Old Regime", "New Regime"],
      deductions: "Deductions (₹)",
      section80C: "Section 80C (PF, PPF, Insurance)",
      section80CTip: "Max ₹1.5L deduction for PF, PPF, life insurance, ELSS, etc.",
      section80D: "Section 80D (Medical Insurance)",
      section80DTip: "Max ₹25,000 (₹50,000 for seniors) for health insurance premiums",
      hra: "HRA (House Rent Allowance)",
      hraTip: "Actual rent paid (calculated as per rules)",
      calculate: "Calculate Tax",
      reset: "Reset",
      resultTitle: "Tax Calculation Result",
      totalIncome: "Total Income:",
      totalDeductions: "Total Deductions:",
      exemptionLimit: "Exemption Limit:",
      taxableIncome: "Taxable Income:",
      taxLiability: "Tax Liability:",
      regimeLabel: "Regime:"
    },
    hi: {
      title: "आयकर कैलकुलेटर",
      salary: "वार्षिक वेतन (₹)",
      otherIncome: "अन्य आय (₹)",
      otherIncomePlaceholder: "ब्याज, किराया, आदि",
      ageGroup: "आयु वर्ग",
      ageOptions: ["60 वर्ष से कम", "60 - 80 वर्ष", "80 वर्ष से अधिक"],
      regime: "कर प्रणाली",
      regimeOptions: ["पुरानी प्रणाली", "नई प्रणाली"],
      deductions: "कटौतियाँ (₹)",
      section80C: "धारा 80C (PF, PPF, बीमा)",
      section80CTip: "PF, PPF, जीवन बीमा, ELSS, आदि पर अधिकतम ₹1.5 लाख तक की कटौती",
      section80D: "धारा 80D (स्वास्थ्य बीमा)",
      section80DTip: "स्वास्थ्य बीमा प्रीमियम पर अधिकतम ₹25,000 (वरिष्ठ नागरिकों के लिए ₹50,000)",
      hra: "HRA (घर किराया भत्ता)",
      hraTip: "वास्तव में भुगतान किया गया किराया (नियमों के अनुसार गणना)",
      calculate: "कर गणना करें",
      reset: "रीसेट",
      resultTitle: "कर गणना परिणाम",
      totalIncome: "कुल आय:",
      totalDeductions: "कुल कटौतियाँ:",
      exemptionLimit: "छूट सीमा:",
      taxableIncome: "कर योग्य आय:",
      taxLiability: "कर दायित्व:",
      regimeLabel: "प्रणाली:"
    }
  }

  const t = translations[language]

  // Format numbers with commas for Indian numbering system
  const formatNumber = (num) => {
    return num ? parseFloat(num.replace(/,/g, '')).toLocaleString('en-IN') : ''
  }

  const parseInput = (value) => {
    return parseFloat(value.replace(/,/g, '')) || 0
  }

  const calculateTax = () => {
    const totalIncome = parseInput(income) + parseInput(otherIncome)
    const totalDeductions = Object.values(deductions).reduce((sum, val) => sum + parseInput(val), 0)
    let taxable = Math.max(0, totalIncome - totalDeductions - getExemptionLimit())
    let taxAmount = 0

    // Old Regime Tax Slabs
    if (regime === 'old') {
      if (taxable > 1000000) {
        taxAmount = 112500 + (taxable - 1000000) * 0.3
      } else if (taxable > 500000) {
        taxAmount = 12500 + (taxable - 500000) * 0.2
      } else if (taxable > 250000) {
        taxAmount = (taxable - 250000) * 0.05
      }
    } else {
      // New Regime Tax Slabs (simplified)
      if (taxable > 1500000) {
        taxAmount = 187500 + (taxable - 1500000) * 0.3
      } else if (taxable > 1200000) {
        taxAmount = 112500 + (taxable - 1200000) * 0.2
      } else if (taxable > 900000) {
        taxAmount = 67500 + (taxable - 900000) * 0.15
      } else if (taxable > 700000) {
        taxAmount = 37500 + (taxable - 700000) * 0.1
      } else if (taxable > 500000) {
        taxAmount = 12500 + (taxable - 500000) * 0.05
      } else if (taxable > 300000) {
        taxAmount = (taxable - 300000) * 0.05
      }
    }

    // Apply age-based rebate
    if (ageGroup === '<60' && taxable <= 250000) taxAmount = 0
    else if (ageGroup === '60-80' && taxable <= 300000) taxAmount = 0
    else if (ageGroup === '80+' && taxable <= 500000) taxAmount = 0

    // Add 4% health and education cess
    taxAmount = taxAmount * 1.04

    setTaxableIncome(taxable)
    setTax(taxAmount)
    setShowResult(true)
  }

  const getExemptionLimit = () => {
    return ageGroup === '<60' ? 250000 : ageGroup === '60-80' ? 300000 : 500000
  }

  const handleDeductionChange = (key, value) => {
    setDeductions(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleInputChange = (value, setter) => {
    // Remove all non-digit characters except decimal point
    const cleanedValue = value.replace(/[^0-9.]/g, '')
    setter(cleanedValue)
  }

  const resetCalculator = () => {
    setIncome('')
    setOtherIncome('')
    setDeductions({
      section80C: '',
      section80D: '',
      hra: ''
    })
    setTax(0)
    setTaxableIncome(0)
    setShowResult(false)
  }

  // Tooltip component
  const Tooltip = ({ text }) => (
    <div className="relative inline-block ml-2 group">
      <FiInfo className="text-gray-400 hover:text-gray-600 cursor-pointer" />
      <div className={`absolute z-10 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 w-48 bottom-full mb-2 ${language === 'hi' ? 'right-0' : 'left-1/2 transform -translate-x-1/2'}`}>
        {text}
      </div>
    </div>
  )

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
          <FiDollarSign className="text-green-500" />
          <span>{t.title}</span>
        </h2>
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <button 
            onClick={() => setLanguage('en')} 
            className={`px-3 py-1 text-sm ${language === 'en' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage('hi')} 
            className={`px-3 py-1 text-sm ${language === 'hi' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}
          >
            हिंदी
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label className="block text-sm font-medium text-gray-700">{t.salary}</label>
          <input
            type="text"
            value={formatNumber(income)}
            onChange={(e) => handleInputChange(e.target.value, setIncome)}
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500"
            placeholder={language === 'en' ? "e.g. 8,50,000" : "जैसे: 8,50,000"}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-gray-700">{t.otherIncome}</label>
          <input
            type="text"
            value={formatNumber(otherIncome)}
            onChange={(e) => handleInputChange(e.target.value, setOtherIncome)}
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500"
            placeholder={t.otherIncomePlaceholder}
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t.ageGroup}</label>
            <div className="relative mt-1">
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                className="appearance-none p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 pr-8"
              >
                <option value="<60">{t.ageOptions[0]}</option>
                <option value="60-80">{t.ageOptions[1]}</option>
                <option value="80+">{t.ageOptions[2]}</option>
              </select>
              <FiChevronDown className="absolute right-3 top-3.5 text-gray-400" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-700">{t.regime}</label>
            <div className="relative mt-1">
              <select
                value={regime}
                onChange={(e) => setRegime(e.target.value)}
                className="appearance-none p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 pr-8"
              >
                <option value="old">{t.regimeOptions[0]}</option>
                <option value="new">{t.regimeOptions[1]}</option>
              </select>
              <FiChevronDown className="absolute right-3 top-3.5 text-gray-400" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="space-y-4"
        >
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowDeductions(!showDeductions)}
          >
            <h3 className="font-medium text-gray-700 flex items-center gap-2">
              <FiHeart className="text-green-500" />
              <span>{t.deductions}</span>
            </h3>
            <FiChevronDown className={`transition-transform ${showDeductions ? 'rotate-180' : ''}`} />
          </div>

          <AnimatePresence>
            {showDeductions && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pl-2 border-l-2 border-green-200">
                  <div>
                    <label className="block text-sm text-gray-600 flex items-center">
                      {t.section80C}
                      <Tooltip text={t.section80CTip} />
                    </label>
                    <input
                      type="text"
                      value={formatNumber(deductions.section80C)}
                      onChange={(e) => handleInputChange(e.target.value, (val) => handleDeductionChange('section80C', val))}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200"
                      placeholder={language === 'en' ? "Max 1,50,000" : "अधिकतम 1,50,000"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 flex items-center">
                      {t.section80D}
                      <Tooltip text={t.section80DTip} />
                    </label>
                    <input
                      type="text"
                      value={formatNumber(deductions.section80D)}
                      onChange={(e) => handleInputChange(e.target.value, (val) => handleDeductionChange('section80D', val))}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200"
                      placeholder={language === 'en' ? "Max 25,000" : "अधिकतम 25,000"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 flex items-center">
                      {t.hra}
                      <Tooltip text={t.hraTip} />
                    </label>
                    <input
                      type="text"
                      value={formatNumber(deductions.hra)}
                      onChange={(e) => handleInputChange(e.target.value, (val) => handleDeductionChange('hra', val))}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200"
                      placeholder={language === 'en' ? "Actual rent paid" : "भुगतान किया गया किराया"}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex gap-3"
        >
          <button
            onClick={calculateTax}
            className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            {t.calculate}
          </button>
          <button
            onClick={resetCalculator}
            className="py-3 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium transition-colors"
          >
            {t.reset}
          </button>
        </motion.div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-5 bg-green-50 rounded-lg border border-green-200"
            >
              <h3 className="text-lg font-semibold text-green-800 mb-3">{t.resultTitle}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">{t.totalIncome}</span>
                  <span className="font-medium">₹{(parseInput(income) + parseInput(otherIncome)).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t.totalDeductions}</span>
                  <span className="font-medium">₹{Object.values(deductions).reduce((sum, val) => sum + parseInput(val), 0).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t.exemptionLimit}</span>
                  <span className="font-medium">₹{getExemptionLimit().toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="text-gray-700 font-medium">{t.taxableIncome}</span>
                  <span className="font-bold">₹{taxableIncome.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between bg-green-100 -mx-3 px-3 py-2 rounded">
                  <span className="text-green-800 font-bold">{t.taxLiability}</span>
                  <span className="text-green-800 font-bold text-lg">₹{tax.toFixed(0).toLocaleString('en-IN')}</span>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">{t.regimeLabel} </span>
                  {regime === 'old' ? t.regimeOptions[0] : t.regimeOptions[1]}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}