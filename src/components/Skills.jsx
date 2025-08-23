import { motion } from "framer-motion";
import { Code, Cpu, Globe, Database, Wrench } from "lucide-react";

export default function Skills({ skills }) {
    return (
        <section id="skills" className="container-section px-5 sm:px-10 py-20 sm:py-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Skills
                </h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    A mix of technologies I love working with 🚀
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((s, i) => (
                    <motion.div
                        key={s}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: i * 0.04 }}
                        whileHover={{ scale: 1.07, rotate: [-1, 1, 0] }}
                        className="group relative card px-5 py-6 text-center rounded-2xl shadow-md 
                                   bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/70 dark:to-gray-900/60 
                                   backdrop-blur-sm hover:shadow-lg cursor-pointer"
                    >
                        <div className="flex justify-center mb-3">
                            {/* Optional icon rotation (just for fun) */}
                            <Code className="w-6 h-6 text-sky-500 group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{s}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
