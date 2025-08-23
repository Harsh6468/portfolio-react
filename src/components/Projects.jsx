import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ projects }) {
    return (
        <section id="projects" className="container-section px-5 sm:px-10 py-20 sm:py-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-sky-500 to-fuchsia-500 bg-clip-text text-transparent">
                    🚀 Projects
                </h2>
                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                    A few projects I have worked on recently
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <motion.article
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="card p-6 flex flex-col justify-between rounded-2xl 
                                   bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/70 dark:to-gray-900/60 
                                   shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-transform cursor-pointer"
                    >
                        <div>
                            <h3 className="text-xl font-semibold">{p.title}</h3>
                            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {p.desc}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {p.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r 
                                               from-sky-500/20 to-pink-500/20 border border-white/20 dark:border-white/10"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="mt-6 flex justify-center gap-4">
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary flex items-center gap-1 px-4 py-2"
                            >
                                <ExternalLink size={16} /> Live
                            </a>
                            <a
                                href={p.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-ghost flex items-center gap-1 px-4 py-2"
                            >
                                <Github size={16} /> Code
                            </a>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
