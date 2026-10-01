import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const activities = [
    {
        role: "IEEE Computer Society Secretary",
        company: "PCET's NMIET, Pune",
        duration: "Present",
        location: "Pune",
        image: "/ieee-cs.png",
        details: "Serving as the IEEE Computer Society Secretary, contributing to technical community initiatives, coordinating activities, supporting student engagement, and helping organize technical events and learning programs."
    },
    {
        role: "Vice President",
        company: "Meta Coders Club, NMIET",
        duration: "Present",
        location: "Pune",
        image: "/meta-coders.png",
        details: "Supporting the leadership and technical direction of Meta Coders Club, mentoring student developers, coordinating technical initiatives, and contributing to coding events, projects, and community activities."
    },
    {
        role: "Technical Lead",
        company: "IEEE Student Branch, NMIET",
        duration: "Present",
        location: "Pune",
        image: "/ieee-sb.png",
        details: "Leading technical initiatives and student development activities, mentoring members, coordinating technical projects, and supporting the execution of workshops, events, and technical programs."
    },
    {
        role: "Webmaster",
        company: "IEEE Student Branch, NMIET",
        duration: "Present",
        location: "Pune",
        image: "/ieee-sb.png",
        details: "Managing and developing web-based initiatives for the IEEE Student Branch, maintaining digital platforms, and contributing to the branch's online presence and technical activities."
    }
];

const Extracurricular = () => {
    return (
        <section id="extracurricular" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Roles and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Responsibilities</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activities.map((act, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-premium flex flex-col sm:flex-row items-center gap-6 p-6 ring-1 ring-white/10 hover:ring-purple-500/50 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden shadow-2xl rounded-2xl group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-colors duration-500 pointer-events-none" />

                            {/* Logo */}
                            <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden z-10">
                                <img src={act.image} alt={act.company} className="w-full h-full object-contain" />
                            </div>

                            {/* Details */}
                            <div className="flex-grow flex flex-col text-center sm:text-left z-10">
                                <h3 className="font-bold text-gray-100 text-xl mb-1">{act.role}</h3>
                                <div className="text-sm font-medium text-blue-400 mb-3">{act.company}</div>

                                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-3 text-sm text-gray-400">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" /> {act.duration}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" /> {act.location}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {act.details}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Extracurricular;
