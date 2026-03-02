import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Code2, Cpu, Mail, Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Company Visit', href: '#zensar' },
    { name: 'Projects', href: '#projects' },
    { name: 'Profiles', href: '#coding-profiles' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect and active section tracking
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine which section is currently active based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the viewport
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                        break;
                    }
                }
            }

            if (current && current !== activeSection) {
                setActiveSection(current);
            } else if (window.scrollY === 0) {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    // Smooth scroll handler
    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            // Adjust offset for the fixed navbar height
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navbar - Floating Glassmorphic */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'py-3 bg-[#050510]/80 backdrop-blur-md border-b border-white/10 shadow-lg'
                    : 'py-5 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between md:justify-center">

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center justify-center gap-2 lg:gap-4 glass-premium px-8 py-2.5 rounded-full border border-white/10 mx-auto">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className={`relative flex items-center px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${isActive
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navBlob"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden relative z-50 p-2 text-white bg-white/5 border border-white/10 rounded-lg backdrop-blur-md ml-auto"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                </div>
            </motion.header>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#050510]/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
                    >
                        <nav className="flex flex-col gap-4 mt-8">
                            {navItems.map((item, i) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (
                                    <motion.a
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        href={item.href}
                                        onClick={(e) => scrollToSection(e, item.href)}
                                        className={`flex justify-center p-4 rounded-2xl text-lg font-semibold tracking-wide transition-all ${isActive
                                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 text-white'
                                            : 'glass text-gray-400 active:bg-white/10'
                                            }`}
                                    >
                                        {item.name}
                                    </motion.a>
                                );
                            })}
                        </nav>

                        <div className="mt-auto mb-10 pb-safe">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=mayurtayade883@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex justify-center items-center py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
