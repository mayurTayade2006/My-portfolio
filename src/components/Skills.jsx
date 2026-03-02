import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Code, FileJson, Shield, MonitorPlay, CodeSquare, GitMerge } from 'lucide-react';

const skillCategories = [
    {
        title: "Backend Development",
        skills: [
            { name: "Core Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
            { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
            { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "Hibernate", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg" },
            { name: "REST APIs", icon: <Server size={28} className="text-blue-400" /> },
            { name: "JWT Auth", icon: <Shield size={28} className="text-purple-400" /> }
        ]
    },
    {
        title: "Frontend Development",
        skills: [
            { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
            { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
        ]
    },
    {
        title: "Databases & Cloud",
        skills: [
            { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { name: "Oracle", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
            { name: "SQL", icon: <Database size={28} className="text-blue-300" /> },
            { name: "Google Cloud (GCP)", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
        ]
    },
    {
        title: "Core CS & Tools",
        skills: [
            { name: "DSA", icon: <CodeSquare size={28} className="text-blue-500" /> },
            { name: "OOP", icon: <Code size={28} className="text-purple-500" /> },
            { name: "DBMS", icon: <Database size={28} className="text-green-500" /> },
            { name: "OS", icon: <MonitorPlay size={28} className="text-gray-400" /> },
            { name: "System Design", icon: <GitMerge size={28} className="text-orange-400" /> },
            { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertInDark: true },
            { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
            { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -z-10" />
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Expertise</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-premium p-8 ring-1 ring-white/10 hover:ring-blue-500/50 transition-all duration-500 hover:-translate-y-2 relative group overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-colors duration-500 pointer-events-none" />

                            <h3 className="text-2xl font-semibold mb-6 text-gray-200 border-b border-white/20 pb-4 inline-block w-full relative z-10">
                                {category.title}
                            </h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-4"
                            >
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className="relative group/skill flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-purple-500/50 transition-all cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-2 w-16 h-16 sm:w-20 sm:h-20"
                                    >
                                        {/* Skill Icon / Image */}
                                        {skill.img ? (
                                            <img
                                                src={skill.img}
                                                alt={skill.name}
                                                className={`w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover/skill:scale-110 ${skill.invertInDark ? 'filter invert brightness-0' : ''}`}
                                            />
                                        ) : (
                                            <div className="transition-transform duration-300 group-hover/skill:scale-110">
                                                {skill.icon}
                                            </div>
                                        )}

                                        {/* Tooltip */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 bg-gray-900 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap z-50">
                                            {skill.name}
                                            {/* Tooltip Arrow */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
