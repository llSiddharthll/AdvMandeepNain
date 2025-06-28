import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaCalculator,
  FaQuestionCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ResourcesPage = () => {
  const resources = [
    {
      title: "Tax Calculators",
      icon: <FaCalculator className="text-4xl mb-4 text-[var(--primary)]" />,
      description:
        "Tools for GST liability or income tax calculations based on income slabs or GST rates.",
      items: [
        "GST Calculator",
        "Income Tax Calculator",
        "TDS Calculator",
        "HRA Calculator",
      ],
      link: "#calculators",
    },
    {
      title: "Guides & Tutorials",
      icon: <FaFilePdf className="text-4xl mb-4 text-[var(--primary)]" />,
      description: "Downloadable resources to help you navigate tax compliance.",
      items: [
        "How to File GSTR-1",
        "Understanding Input Tax Credit",
        "Income Tax Deductions Guide",
        "TDS Return Filing Process",
      ],
      link: "#guides",
    },
    {
      title: "FAQs",
      icon: <FaQuestionCircle className="text-4xl mb-4 text-[var(--primary)]" />,
      description: "Answers to common questions about tax compliance.",
      items: [
        "Who needs GST registration?",
        "Penalties for late ITR filing",
        "Documents required for GST",
        "Composition scheme benefits",
      ],
      link: "#faqs",
    },
    {
      title: "Official Links",
      icon: (
        <FaExternalLinkAlt className="text-4xl mb-4 text-[var(--primary)]" />
      ),
      description: "Quick access to government tax portals.",
      items: [
        "www.gst.gov.in",
        "www.incometaxindia.gov.in",
        "Haryana Tax Department",
        "GST Council Updates",
      ],
      link: "#links",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] py-12 px-4 sm:px-6 lg:px-8 text-[var(--text)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          <h1 className="text-4xl font-bold mb-4">Tax Resources</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access helpful tools, guides, and information to simplify your tax
            compliance process.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              custom={index + 1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-center">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {resource.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block bg-[var(--secondary)] rounded-full p-1 mr-2 mt-1">
                        <svg
                          className="w-2 h-2 text-[var(--primary)]"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a
                    href={resource.link}
                    className="inline-block px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--accent)] transition-colors duration-300"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="space-y-16">
          {/* Guides Section */}
          <section id="guides" className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Guides & Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "GSTR-1 Filing Guide", type: "PDF", size: "2.4 MB" },
                { title: "Input Tax Credit Explained", type: "PDF", size: "1.8 MB" },
                { title: "Income Tax Deductions 2025", type: "PDF", size: "3.1 MB" },
                { title: "TDS Return Process", type: "Video", duration: "12 min" },
                { title: "GST for Small Businesses", type: "PDF", size: "2.7 MB" },
                { title: "Presumptive Taxation", type: "PDF", size: "1.5 MB" },
              ].map((guide, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="border border-gray-200 rounded-lg p-5 hover:border-[var(--primary)] transition-colors duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                      <FaFilePdf className="text-[var(--primary)] text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{guide.title}</h3>
                      <p className="text-sm text-gray-600">
                        {guide.type} • {guide.size || guide.duration}
                      </p>
                      <button className="mt-3 text-[var(--primary)] hover:text-[var(--accent)] text-sm font-medium flex items-center">
                        Download <FaExternalLinkAlt className="ml-1 text-xs" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQs Section */}
          <section id="faqs" className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "Who needs GST registration?",
                  answer:
                    "Businesses with turnover exceeding ₹20 lakh (₹10 lakh in special category states) need GST registration. Certain businesses like inter-state suppliers and e-commerce operators must register regardless of turnover.",
                },
                {
                  question: "What are the penalties for late ITR filing?",
                  answer:
                    "Late filing penalties can include ₹5,000 if filed after due date but before December 31, or ₹10,000 if filed later. For income below ₹5 lakh, the maximum penalty is ₹1,000.",
                },
                {
                  question: "What documents are needed for GST registration?",
                  answer:
                    "PAN card, Aadhaar card, proof of business address, bank account details, photographs, and authorization documents (for companies/LLPs).",
                },
                {
                  question: "What are the benefits of the composition scheme?",
                  answer:
                    "The composition scheme allows small businesses (turnover < ₹1.5 crore for goods or ₹50 lakh for services) to pay GST at a fixed rate with simplified compliance.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="border-b border-gray-200 pb-4"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                      <h3 className="font-medium group-hover:text-[var(--primary)]">
                        {faq.question}
                      </h3>
                      <span className="text-[var(--primary)] text-xl group-open:hidden">+</span>
                      <span className="text-[var(--primary)] text-xl hidden group-open:inline">−</span>
                    </summary>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </details>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Links Section */}
          <section id="links" className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Official Tax Portals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "GST Portal",
                  url: "https://www.gst.gov.in",
                  description:
                    "Official GST services portal for registration, returns, and payments",
                },
                {
                  name: "Income Tax India",
                  url: "https://www.incometaxindia.gov.in",
                  description:
                    "Central Board of Direct Taxes portal for income tax services",
                },
                {
                  name: "Haryana Tax Department",
                  url: "https://haryanatax.gov.in",
                  description: "Haryana state tax department for local tax information",
                },
                {
                  name: "GST Council Updates",
                  url: "https://gstcouncil.gov.in",
                  description: "Latest news and decisions from the GST Council",
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-200 rounded-lg p-5 hover:border-[var(--primary)] transition-colors duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="bg-[var(--primary)]/10 p-3 rounded-lg mr-4">
                      <FaExternalLinkAlt className="text-[var(--primary)] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-[var(--primary)]">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-600">{link.description}</p>
                      <div className="mt-2 text-sm text-[var(--primary)] flex items-center">
                        Visit site <FaExternalLinkAlt className="ml-1 text-xs" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
