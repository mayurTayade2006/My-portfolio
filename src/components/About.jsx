import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            label: "7 Months",
            title: "Industry Experience",
            description: "Across SDLC in Java & Full-Stack.",
            icon: <Terminal className="w-5 h-5 text-blue-400" />
        },
    ];

    return (
        <section id="about" className="relative py-24 px-6 overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">My Journey</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 text-gray-400 text-lg leading-relaxed"
                    >
                        <p>
                            I am a passionate <strong className="text-gray-200">Software Development Engineer</strong> currently pursuing my B.E. in Computer Science Engineering at PCET’s NMIET, Pune. My journey in tech is fueled by an insatiable curiosity for building scalable, efficient, and clean software solutions.
                        </p>
                        <p>
                            With practical industry experience in core Java, Spring Boot, and MERN stack development, I bridge the gap between robust backend architectures and highly aesthetic frontend experiences.
                        </p>
                        <div className="glass p-6 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <p className="relative z-10 italic text-gray-300">
                                "As a Technical Coordinator for Meta Coders Club,NMIET , I've helped students in DSA, debugging, and guided peers in solving complex coding challenges."
                            </p>
                        </div>

                    </motion.div>

                    {/* Right Highlights */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="flex flex-col gap-6"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: 30 },
                                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                                }}
                                className="glass-card p-6 flex items-start gap-6 group hover:-translate-y-1"
                            >
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                                        {item.label}
                                    </h3>
                                    <h4 className="text-lg font-semibold text-gray-200">{item.title}</h4>
                                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Academic Honors */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 30 },
                                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                            }}
                            className="pt-2"
                        >
                            <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                                🏆 Academic Honors & Achievements
                            </h3>
                            <div className="space-y-3">
                                <div className="glass p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <h4 className="relative z-10 text-white font-medium mb-1 flex justify-between items-center whitespace-break-spaces">
                                        <span>Student of the Year <span className="text-yellow-500/90 text-sm ml-1">(2018–19)</span></span>
                                    </h4>
                                    <p className="relative z-10 text-sm text-gray-400">
                                        Vishwakalyan English Medium School, Pune (Cambridge University Press Knowledge Partner)
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                                    <div className="glass p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <h4 className="relative z-10 text-white font-medium mb-1">SpellBee National Level</h4>
                                        <p className="relative z-10 text-sm text-yellow-500/90 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Gold Medalist
                                        </p>
                                    </div>
                                    <div className="glass p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <h4 className="relative z-10 text-white font-medium mb-1">GOF Olympiad</h4>
                                        <p className="relative z-10 text-sm text-yellow-500/90 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Gold Medalist
                                        </p>
                                    </div>
                                    <div className="glass p-4 rounded-xl border border-white/5 relative overflow-hidden group xl:col-span-2">
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <h4 className="relative z-10 text-white font-medium mb-1">Birla Tech Convention Pune</h4>
                                        <p className="relative z-10 text-sm text-yellow-500/90 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Best Innovation Award (2019)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Zensar Technologies Visit */}
                <motion.div
                    id="zensar"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24"
                >
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        Company Visit: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Zensar Technologies</span>
                    </h3>

                    <div className="glass-premium p-8 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                            {/* Images Gallery */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lg group-hover:shadow-blue-500/20 transition-all">
                                    <img src="/zensar1.jpg" alt="Zensar Visit 1" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lg group-hover:shadow-purple-500/20 transition-all">
                                    <img src="/zensar2.jpg" alt="Zensar Visit 2" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                                <div className="glass p-4 rounded-xl border border-white/5 flex items-start gap-4">
                                    <span className="text-2xl mt-0.5">🤩</span>
                                    <p>Got the opportunity to explore the company</p>
                                </div>
                                <div className="glass p-4 rounded-xl border border-white/5 flex items-start gap-4">
                                    <span className="text-2xl mt-0.5">🚀</span>
                                    <p>Successfully completed the Future Youth Skilling Program and received a course completion certificate from Zensar Technologies</p>
                                </div>
                                <div className="glass p-4 rounded-xl border border-white/5 flex items-start gap-4">
                                    <span className="text-2xl mt-0.5">🎉</span>
                                    <p>Received valuable guidance from experienced working professionals with great expertise in the IT industry</p>
                                </div>
                                <div className="glass p-4 rounded-xl border border-white/5 flex items-start gap-4">
                                    <span className="text-2xl mt-0.5">🦾</span>
                                    <p>All of this was possible because of the incredible opportunity provided by NASSCOM Foundation and Zensar Technologies. The program provided insights into rapidly expanding and emerging technologies shaping the IT industry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
