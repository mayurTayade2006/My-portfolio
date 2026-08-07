import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Server, Layout, Users } from 'lucide-react';

const projects = [
    {
        title: "Arogya AI: Intelligent Healthcare",
        description: "Built a MERN-based AI healthcare platform integrating Gemini AI for symptom triage, hospital recommendations, and predictive health scoring, with OCR, JWT auth, and multilingual support.",
        icon: <Activity className="w-6 h-6 text-blue-400" />,
        image: "/arogyaai.png", // Added Arogya AI photo
        tech: ["MERN Stack", "JWT (JSON Web Token)", "BCrypt.js (password hashing)", "Mongoose (ODM)", "Tailwind CSS", "Glassmorphism"],
        github: "https://github.com/mayurTayade2006",
        demo: "#"
    },
    {
        title: "Codista LMS: Learning Platform",
        description: "Developed a full-stack MERN Learning Management System with role-based access, course management, quizzes, JWT authentication, and responsive dark-mode UI.",
        icon: <Layout className="w-6 h-6 text-purple-400" />,
        image: "/codista.png", // Added Codista LMS photo
        tech: ["MERN Stack", "REST API", "Mongoose", "Tailwind CSS", "Gemini API"],
        github: "https://github.com/mayurTayade2006",
        demo: "#"
    },
    {
        title: "Spendify: Smart Expense Tracker",
        description: "Created a MERN expense tracker integrated with Gemini AI for financial insights, featuring secure JWT auth and interactive data visualization dashboards.",
        icon: <Server className="w-6 h-6 text-green-400" />,
        image: "/spendify.png", // Added Spendify photo
        tech: ["MERN Stack", "Express JS", "JWT", "Mongoose", "Gemini API", "Bcrypt JS", "Tailwind CSS"],
        github: "https://github.com/mayurTayade2006",
        demo: "#"
    },
    {
        title: "WorkSphere: Workforce Management",
        description: "WorkSphere is an Employee Management Platform handling employee records and department searches. Its backend uses Spring Boot 3, Java 21, and Oracle Database, while its React (Vite + JavaScript) frontend provides a responsive Single Page Application utilizing React Router, Axios, and clean Vanilla CSS for state-of-the-art workforce tracking.",
        icon: <Users className="w-6 h-6 text-amber-400" />,
        image: "/worksphere.jpg",
        tech: ["Spring Boot 3", "Java 21", "Oracle DB", "React (Vite)", "React Router", "Axios", "Vanilla CSS"],
        github: "https://github.com/mayurTayade2006",
        demo: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-premium flex flex-col h-full group relative overflow-hidden ring-1 ring-white/10 hover:ring-purple-500/50 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/10 group-hover:to-blue-500/20 transition-colors duration-500 pointer-events-none" />

                            <div className="flex-grow flex flex-col relative z-10">
                                {/* Project Image Banner */}
                                {project.image && (
                                    <div className="w-full h-48 sm:h-56 mb-6 overflow-hidden border-b border-white/10 group-hover:border-purple-500/30 transition-colors flex items-center justify-center p-6 bg-white/5 relative">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl relative z-10"
                                        />
                                    </div>
                                )}

                                <div className="px-8 flex-grow flex flex-col">
                                    {/* Project Logo/Icon removed as requested */}

                                    <h3 className="text-2xl font-bold text-gray-100 mb-3">{project.title}</h3>
                                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
