import "../../assets/services.css"

export default function Services() {
    return (
        <section className="min-h-screen bg-[var(--secondary)] text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
            <span className="text-[var(--text)]/80 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">what we're offering <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </span>
            <h1 className="text-[var(--text)] text-2xl md:text-4xl font-semibold max-w-3xl mx-auto mb-10 leading-snug">Services Built Specifically for Your Business</h1>
            <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div className="card bg-[var(--primary)] p-10 relative">
                    <div className="circle">
                    </div>
                    <div className="relative lg:pr-52">
                        <h2 className="capitalize text-[var(--text)] mb-4 text-2xl xl:text-3xl">Income Tax Services</h2>
                        <p className="text-[var(--text)]/80">Expert e-filing of Income Tax Returns (ITR) for individuals and businesses, TDS return filing, tax planning, HRA claim assistance, and penalty guidance for non-compliance.</p>
                    </div>
                    <div className="icon"></div>
                </div>
                <div className="card bg-[var(--primary)] p-10 relative">
                    <div className="circle">
                    </div>
                    <div className="relative lg:pl-48">
                        <h2 className="capitalize text-[var(--text)] mb-4 text-2xl xl:text-3xl">GST Services</h2>
                        <p className="text-[var(--text)]/80">Seamless GST registration, return filing (monthly, quarterly, or QRMP scheme), input tax credit claims, refund processing, and e-way bill compliance.</p>
                    </div>
                </div>
                <div className="card bg-[var(--primary)] p-10 relative">
                    <div className="circle">
                    </div>
                    <div className="relative lg:pr-44">
                        <h2 className="capitalize text-[var(--text)] mb-4 text-2xl xl:text-3xl">Consultancy Services</h2>
                        <p className="text-[var(--text)]/80">Tailored tax audit support, composition scheme advice for small businesses, and guidance for freelancers under Section 44ADA for presumptive income.</p>
                    </div>
                </div>
                <div className="card bg-[var(--primary)] p-10 relative">
                    <div className="circle">
                    </div>
                    <div className="relative lg:pl-48">
                        <h2 className="capitalize text-[var(--text)] mb-4 text-2xl xl:text-3xl">Specialized Services</h2>
                        <p className="text-[var(--text)]/80">Support for businesses in Special Economic Zones (SEZs) and guidance for non-resident or casual taxable persons.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}