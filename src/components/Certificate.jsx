import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Certificates({ certificates }) {
    const [showAll, setShowAll] = useState(false);

    const initialCount = 3; // first row only (sm:2, lg:3)
    const visibleCertificates = showAll ? certificates : certificates.slice(0, initialCount);

    return (
        <section id="certificates" className="container-section px-5 sm:px-10 py-20 sm:py-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text">
                    Certificates
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleCertificates.map((c, i) => (
                    <motion.article
                        key={c.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="card p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 
                                    dark:from-gray-800/70 dark:to-gray-900/60 
                                    shadow-xl hover:shadow-2xl hover:scale-[1.03] 
                                    transition-transform cursor-pointer flex flex-col"
                    >
                        {/* Certificate Image */}
                        <div className="rounded-xl overflow-hidden shadow-md">
                            <img
                                src={c.image}
                                alt={c.title}
                                className="w-full h-60 object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="mt-4 text-lg font-semibold text-center">{c.title}</h3>

                        {/* Issuer */}
                        <p className="mt-1 text-sm text-gray-700 dark:text-gray-300 text-center opacity-80">
                            {c.issuer}
                        </p>

                        {/* Button */}
                        <div className="mt-5 flex justify-center">
                            <a
                                href={c.certLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex items-center gap-1 px-4 py-2 rounded-full"
                            >
                                <ExternalLink size={16} /> View Certificate
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Show More / Less */}
            {certificates.length > initialCount && (
                <div className="mt-10 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-700/70 
                                    bg-white dark:bg-gray-800/70 text-gray-800 dark:text-gray-200 
                                    shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        {showAll ? "Show Less" : "Show All"}
                    </button>
                </div>
            )}
        </section>
    );
}
