import React from 'react';
import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import Cta from './Cta';

const GSTCompliance = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };


    const SectionCard = ({ icon: Icon, title, children, borderColor, bgColor, headingColor }) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

        return (
            <motion.div
                ref={ref}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={`relative bg-white rounded-2xl shadow-xl p-8 border-t-4 ${borderColor} ${bgColor} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-[var(--background)] opacity-50" />
                <div className="relative flex items-center mb-6">
                    <Icon className="text-4xl mr-4" style={{ color: headingColor }} />
                    <h2 className="text-2xl font-bold text-[var(--primary)]">{title}</h2>
                </div>
                <div className="relative text-[var(--text)]">{children}</div>
            </motion.div>
        );
    };


    const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: footerRef, inView: footerInView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <div
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-12"
            style={{ background: 'linear-gradient(to bottom, var(--background), #e6edec)' }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto"
            >
                <motion.div
                    ref={headerRef}
                    variants={itemVariants}
                    initial="hidden"
                    animate={headerInView ? 'visible' : 'hidden'}
                    className="text-center mb-20"
                >
                    <h1
                        className="text-5xl md:text-6xl font-extrabold tracking-tight"
                        style={{ color: 'var(--primary)' }}
                    >
                        GST Compliance
                    </h1>
                    <p
                        className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
                        style={{ color: 'var(--text)' }}
                    >
                        Ensuring legal transparency and upholding financial compliance as per GST laws with{' '}
                        <span style={{ color: 'var(--primary)', fontWeight: '600' }}>
                            Mandeep Nain & Associates
                        </span>.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <SectionCard
                        icon={FaFileInvoiceDollar}
                        title="GSTIN Details"
                        borderColor="border-[var(--primary)]"
                        bgColor="bg-[var(--primary)]/10"
                        headingColor="var(--primary)"
                    >

                        <ul className="text-base space-y-3">
                            <li>
                                <strong>GSTIN:</strong> 06BWBPM7456C1ZM
                            </li>
                            <li>
                                <strong>Legal Name:</strong> Mandeep Kumar
                            </li>
                            <li>
                                <strong>Trade Name:</strong> Mandeep Nain & Associates
                            </li>
                            <li>
                                <strong>Registration Date:</strong> 01/01/2024
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        icon={FaCheckCircle}
                        title="Certificate Information"
                        borderColor="border-[var(--secondary)]"
                        bgColor="bg-[var(--secondary)]/10"
                        headingColor="var(--secondary)"
                    >

                        <p className="text-base">
                            Certificate issued by <strong>Manisha Aggarwal</strong>, Excise and Taxation Officer,
                            Panchkula Ward 5, Haryana on <strong>01/01/2024</strong>.
                        </p>
                    </SectionCard>

                    <SectionCard
                        icon={FaExclamationTriangle}
                        title="Compliance Notes"
                        borderColor="border-[var(--accent)]"
                        bgColor="bg-[var(--accent)]/10"
                        headingColor="var(--accent)"
                    >

                        <p className="text-base">
                            Display of GST certificate at the principal place of business is mandatory.
                            Non-compliance may result in penalties:
                        </p>
                        <ul className="mt-4 list-disc pl-6 text-base space-y-2">
                            <li>₹10,000 or</li>
                            <li>10% of tax due, whichever is higher</li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        icon={MdOutlineDocumentScanner}
                        title="Documents Required"
                        borderColor="border-[var(--primary)]"
                        bgColor="bg-[var(--primary)]/10"
                        headingColor="var(--primary)"
                    >

                        <ul className="text-base list-disc pl-6 space-y-2">
                            <li>PAN Card</li>
                            <li>Aadhaar Card</li>
                            <li>Address Proof</li>
                            <li>Bank Details</li>
                            <li>Photographs of Proprietor</li>
                        </ul>
                    </SectionCard>
                </div>

                <motion.div
                    ref={footerRef}
                    variants={itemVariants}
                    initial="hidden"
                    animate={footerInView ? 'visible' : 'hidden'}
                    className="text-center"
                >
                    <div className="relative mx-auto">
                        <img
                            src="/g1.png"
                            alt="GST Certificate Preview"
                            className="mx-auto rounded-xl shadow-2xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                        <div
                            className="absolute inset-0 rounded-xl"
                            style={{ background: 'linear-gradient(to top, var(--text)/0.2, transparent)' }}
                        />
                    </div>
                    <p className="text-sm mt-6" style={{ color: 'var(--text)' }}>
                        Preview of the GST registration certificate.
                    </p>
                </motion.div>
            </motion.div>

            <Cta />
        </div>
    );
};

export default GSTCompliance;