import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -z-10" />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I'm currently looking for new opportunities as a Software Development Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-2 space-y-8"
                    >
                        <a href="mailto:mayurtayade883@gmail.com" className="flex items-start gap-4 p-6 glass-premium ring-1 ring-white/10 group hover:-translate-y-2 hover:ring-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 w-full text-left relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
                            <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white transition-all shadow-sm relative z-10">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-semibold">Email</h4>
                                <p className="text-gray-200 font-medium break-all">mayurtayade883@gmail.com</p>
                            </div>
                        </a>

                        <div className="grid grid-cols-3 gap-4">
                            <a
                                href="https://linkedin.com/in/mayur-tayade-13659a2a6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center py-4 glass-premium ring-1 ring-white/10 text-gray-400 hover:text-white hover:-translate-y-2 hover:ring-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-gradient-to-br hover:from-white/10 hover:to-blue-500/10 transition-all duration-500 group relative overflow-hidden"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                            </a>
                            <a
                                href="https://github.com/mayurTayade2006"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center py-4 glass-premium ring-1 ring-white/10 text-gray-400 hover:text-white hover:-translate-y-2 hover:ring-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-gradient-to-br hover:from-white/10 hover:to-purple-500/10 transition-all duration-500 group relative overflow-hidden"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                            </a>
                            <a
                                href="https://www.instagram.com/mayurtayade424?igsh=ZXhneW9reWdpNGp0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center py-4 glass-premium ring-1 ring-white/10 text-gray-400 hover:text-white hover:-translate-y-2 hover:ring-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:bg-gradient-to-br hover:from-white/10 hover:to-pink-500/10 transition-all duration-500 group relative overflow-hidden"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform relative z-10" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Action */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:col-span-3 glass-premium p-8 ring-1 ring-white/10 relative overflow-hidden shadow-2xl flex flex-col justify-center items-center min-h-[300px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/5 to-blue-500/5 pointer-events-none" />

                        <div className="relative z-10 w-full max-w-md text-center space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Let's Connect!</h3>
                            <p className="text-gray-400 mb-8">Click the button below to reach out directly via my Gmail.</p>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=mayurtayade883@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(139,92,246,0.4)] flex justify-center items-center"
                            >
                                <span className="absolute inset-0 w-full h-full -mt-1 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative flex items-center text-lg tracking-wide">
                                    Compose Mail to Mayur
                                    <Mail className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                                </span>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Footer minimal signature */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-gray-500">
                <p className="tracking-wide">Designed and Built by Mayur Tayade</p>
            </div>
        </section>
    );
};

export default Contact;
