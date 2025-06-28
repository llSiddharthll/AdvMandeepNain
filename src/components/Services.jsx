import { motion } from "framer-motion";
import { FaFileAlt, FaGavel, FaUniversity, FaHandHoldingUsd } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Cta from "./Cta";

const services = [
  {
    title: "Income Tax Services",
    icon: <FaFileAlt size={28} />,
    image: "/s1.jpg",
    points: [
      "E-filing of ITR for all income types.",
      "TDS return filing & Form-16 generation.",
      "Tax planning and HRA claim support.",
      "Penalty guidance for non-compliance.",
    ],
  },
  {
    title: "GST Services",
    icon: <FaGavel size={28} />,
    image: "/s2.jpg",
    points: [
      "GST registration assistance.",
      "Monthly/QRMP return filings.",
      "Input Tax Credit (ITC) claims & refunds.",
      "E-way bill compliance & GST rate advice.",
    ],
  },
  {
    title: "Consultancy Services",
    icon: <FaUniversity size={28} />,
    image: "/s3.jpg",
    points: [
      "Audit support & advisory.",
      "Guidance for small business schemes.",
      "Section 44ADA presumptive income help.",
    ],
  },
  {
    title: "Specialized Services",
    icon: <FaHandHoldingUsd size={28} />,
    image: "/s4.jpg",
    points: [
      "Support for SEZ-based businesses.",
      "Assistance for non-resident taxable persons.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--text)] min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-14 px-4"
      >
        <h1 className="text-4xl font-bold mb-3">Expert Tax & GST Services</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          At Mandeep Nain & Associates, we simplify tax compliance, ensure accuracy, and support your financial growth with trusted expertise.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl px-6 mx-auto pb-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-[var(--secondary)] hover:scale-[1.02] transition-transform"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center space-x-3 text-[var(--primary)] mb-3">
                {service.icon}
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <Cta />
    </div>
  );
}
