import React from 'react';
import { motion } from 'framer-motion';
import { Download, Rocket } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-10 px-4 sm:px-6">

            {/* Subtle overlay to ensure text readability over the background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]/50 pointer-events-none z-0" />

            {/* Main Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-7xl mx-auto"
            >
                {/* Premium Split Card matching reference UI */}
                <div className="glass-premium flex flex-col-reverse lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20 overflow-hidden bg-[#0F1021]/80 border-slate-700/50 shadow-2xl lg:rounded-[3rem]">

                    {/* Background Decorative Glow for the Card */}
                    <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>

                    {/* Left Column: Text & CTAs */}
                    <div className="relative z-10 flex flex-col space-y-6 lg:w-1/2 text-left mt-12 lg:mt-0">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                        >
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Mayur Tayade
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-wrap items-center gap-3 mt-4"
                        >
                            <span className="text-xl md:text-2xl font-semibold text-gray-200">
                                Java Developer
                            </span>
                            <span className="text-xl md:text-2xl font-bold text-white bg-blue-600/40 px-4 py-1.5 rounded-md border border-blue-500/30">
                                MERN Stack
                            </span>
                            <span className="text-xl md:text-2xl font-bold text-white bg-purple-600/40 px-4 py-1.5 rounded-md border border-purple-500/30">
                                AI Enthusiast
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-gray-400 max-w-lg text-lg leading-relaxed mt-6"
                        >
                            Aspiring Software Development Engineer crafting scalable, efficient, and visually stunning web applications. Expertise in Java, Spring Boot, cutting-edge MERN stack technologies, and AI Prompt Engineering.
                        </motion.p>

                        {/* Buttons intentionally removed from Hero section */}
                    </div>

                    {/* Right Column: Orbit Image Container */}
                    <div className="relative z-10 flex justify-center items-center lg:w-1/2 lg:pl-10">
                        {/* The Orbit UI Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1, type: "spring" }}
                            className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center flex-shrink-0"
                        >

                            {/* Outer Track (Right side clipped or faint) */}
                            <div className="absolute inset-4 rounded-full border border-white/20 border-l-white border-b-white/50 border-r-transparent border-t-white/20 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-8 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />

                            {/* Node/Planet animating on the track */}
                            <div className="absolute inset-4 animate-[spin_10s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff]" />
                                <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60A5FA]" />
                            </div>

                            {/* Background solid solid circular drop behind image */}
                            <div className="relative w-[70%] h-[70%] bg-[#6C63FF] rounded-full overflow-hidden border-[12px] border-[#0F1021] shadow-[0_0_60px_rgba(108,99,255,0.4)] z-10 flex items-end justify-center">
                                {/* Using the directly uploaded user profile photo */}
                                {/* If background is already removed, this looks exactly like the reference. If not, the circle frame forces it nicely. */}
                                <img
                                    src="/profile-photo.jpg"
                                    alt="Mayur Tayade"
                                    className="w-full h-full object-cover rounded-full"
                                    style={{ objectPosition: 'center 20%', transform: 'scale(2.2)' }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                                    }}
                                />

                                {/* Overlay gradient to merge the bottom of the photo softly if it's not a cutout */}
                                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#6C63FF]/50 to-transparent pointer-events-none" />
                            </div>

                        </motion.div>
                    </div>

                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
