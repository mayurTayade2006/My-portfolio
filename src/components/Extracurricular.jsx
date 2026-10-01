import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin } from 'lucide-react';

const activities = [
    {
        role: "IEEE Computer Society Secretary",
        company: "PCET's NMIET, Pune",
        duration: "Present",
        location: "Pune",
        details: "Serving as the IEEE Computer Society Secretary, contributing to technical community initiatives, coordinating activities, supporting student engagement, and helping organize technical events and learning programs."
    },
    {
        role: "Technical Lead",
        company: "IEEE Student Branch, NMIET",
        duration: "Present",
        location: "Pune",
        details: "Leading technical initiatives and student development activities, mentoring members, coordinating technical projects, and supporting the execution of workshops, events, and technical programs."
    },
    {
        role: "Webmaster",
        company: "IEEE Student Branch, NMIET",
        duration: "Present",
        location: "Pune",
        details: "Managing and developing web-based initiatives for the IEEE Student Branch, maintaining digital platforms, and contributing to the branch's online presence and technical activities."
    },
    {
        role: "Vice President",
        company: "Meta Coders Club, NMIET",
        duration: "Present",
        location: "Pune",
        details: "Supporting the leadership and technical direction of Meta Coders Club, mentoring student developers, coordinating technical initiatives, and contributing to coding events, projects, and community activities."
    }
];

const Extracurricular = () => {
    return (
        <section id="extracurricular" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Extracurricular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Activities</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                        {activities.map((act, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-gray-900 group-hover:bg-blue-500/20 text-gray-400 group-hover:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-colors duration-300">
                                    <Users className="w-4 h-4" />
                                </div>

                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-premium p-6 ring-1 ring-white/10 group-hover:ring-purple-500/50 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-colors duration-500 pointer-events-none" />

                                    <div className="flex items-center justify-between mb-1 relative z-10">
                                        <h3 className="font-bold text-gray-100 text-xl">{act.role}</h3>
                                    </div>
                                    <div className="text-sm font-medium text-blue-400 mb-4">{act.company}</div>

                                    <div className="flex flex-col gap-2 mb-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" /> {act.duration}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" /> {act.location}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {act.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Extracurricular;
