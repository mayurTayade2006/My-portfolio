import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, Download } from 'lucide-react';

const experience = [
    {
        role: "Core Java Intern",
        company: "UniConverge Technologies",
        location: "Noida (Remote)",
        duration: "1 month",
        details: "Developed scalable backend modules using Core Java & Spring Boot (MVC). Built REST APIs with optimized collections & exception handling, participated in SDLC, debugging, and production testing."
    },
    {
        role: "MERN Stack Developer Intern",
        company: "Webstack Academy",
        location: "Bengaluru (Remote)",
        duration: "3 months",
        details: "Developed full-stack applications using MERN stack, implemented JWT authentication & REST API integrations, improved modular routing and code maintainability."
    },
    {
        role: "JAVA Web Developer Intern",
        company: "Eduskills Foundation",
        location: "Remote",
        duration: "3 months",
        details: "Built RESTful APIs using Java and Spring Boot. Worked on database integration, testing, and deployment while maintaining clean and efficient code."
    },
    {
        role: "Technical Coordinator",
        company: "Meta Coders Club, NMIET",
        location: "Pune",
        duration: "Sep 2025 – Present",
        details: "Mentored and helped students in DSA & debugging, conducted coding workshops, and contributed to organizing hackathons and technical initiatives."
    }
];

const achievements = [
    "3-Star CodeChef Coder (MAX 1646 Rating)",
    "360+ Day Coding Streak on CodeChef",
    "5-Star Coder Problem Solving on HackerRank",
    "Published Research Paper on Indian Knowledge System",
    "Built a 5K+ strong LinkedIn tech community sharing programming and career-focused content.",
    "Google Cloud Certified Associate Cloud Engineer",
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Experience Timeline */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-10">
                        <Briefcase className="w-8 h-8 text-blue-500" />
                        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-gray-900 group-hover:bg-blue-500/20 text-gray-400 group-hover:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors duration-300">
                                    <div className="w-3 h-3 bg-current rounded-full" />
                                </div>

                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-premium p-6 ring-1 ring-white/10 group-hover:ring-purple-500/50 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-colors duration-500 pointer-events-none" />

                                    <div className="flex items-center justify-between mb-1 relative z-10">
                                        <h3 className="font-bold text-gray-100 text-xl">{exp.role}</h3>
                                    </div>
                                    <div className="text-sm font-medium text-blue-400 mb-4">{exp.company}</div>

                                    <div className="flex flex-col gap-2 mb-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" /> {exp.duration}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" /> {exp.location}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {exp.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education & Achievements */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-16"
                >
                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <GraduationCap className="w-8 h-8 text-purple-500" />
                            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
                        </div>

                        <div className="glass-premium p-8 border-l-4 border-l-purple-500 relative overflow-hidden group ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500 hover:-translate-y-1 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">B.E. Computer Science & Engineering</h3>
                                <p className="text-purple-400 font-medium mb-1">PCET’s NMIET, Pune | 2024–2028</p>
                                <p className="text-gray-300 font-semibold">CGPA: <span className="text-white">8.86</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <Award className="w-8 h-8 text-yellow-500" />
                            <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
                        </div>

                        <div className="grid gap-4">
                            {achievements.map((achievement, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * idx }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                                    </div>
                                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{achievement}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Download CV CTA under Achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 flex justify-start"
                        >
                            <a
                                href="/MayurTayade_resume.pdf"
                                download="Mayur_Tayade_Resume.pdf"
                                className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center hover:-translate-y-1"
                            >
                                <span className="absolute inset-0 w-full h-full -mt-1 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative flex items-center gap-2 tracking-wide">
                                    <Download className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    Download My Resume
                                </span>
                            </a>
                        </motion.div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Experience;
