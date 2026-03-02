import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const profiles = [
    {
        platform: "CodeChef",
        username: "noted_vine_25",
        url: "https://www.codechef.com/users/noted_vine_25",
        description: "3-Star Coder | MAX 1646 Rating | 360+ Day Streak",
        color: "from-amber-700 to-amber-900",
        shadow: "shadow-amber-900/40",
        iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codechef.svg"
    },
    {
        platform: "HackerRank",
        username: "mayurtayade883",
        url: "https://www.hackerrank.com/profile/mayurtayade883",
        description: "5-Star in Problem Solving",
        color: "from-green-600 to-green-800",
        shadow: "shadow-green-900/40",
        iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hackerrank.svg"
    },
    {
        platform: "HackerEarth",
        username: "@mayurtayade883",
        url: "https://www.hackerearth.com/@mayurtayade883/",
        description: "Active Competitive Programmer",
        color: "from-blue-700 to-blue-900",
        shadow: "shadow-blue-900/40",
        iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hackerearth.svg"
    }
];

const CodingProfiles = () => {
    return (
        <section id="coding-profiles" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center items-center gap-3 mb-4">
                        <Code2 className="w-8 h-8 text-blue-400" />
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Profiles</span>
                        </h2>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {profiles.map((profile, index) => (
                        <motion.a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-premium block relative overflow-hidden ring-1 ring-white/10 hover:ring-white/30 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl rounded-2xl group"
                        >
                            {/* Colorful Gradient Background Hover Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

                            <div className="p-8 flex items-center gap-6 relative z-10">
                                {/* Logo Wrapper */}
                                <div className={`w-16 h-16 shrink-0 rounded-2xl bg-white/5 border border-white/20 p-3 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 ${profile.shadow} transition-all duration-300`}>
                                    <img
                                        src={profile.iconUrl}
                                        alt={profile.platform}
                                        className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>

                                {/* Texts */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-100 flex items-center justify-between">
                                        {profile.platform}
                                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                                    </h3>
                                    <p className="text-sm text-blue-400 mb-1">{profile.username}</p>
                                    <p className="text-xs text-gray-400 leading-relaxed font-medium">
                                        {profile.description}
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
