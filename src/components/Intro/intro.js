import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import bg from '../../assets/asma.png';

const Intro = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ['Web Developer', 'UI/UX Designer', 'ML Explorer'];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section id="intro" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Animated Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-secondary mb-2">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Asma <span className="text-gradient">Malica</span>
                    </h1>

                    <div className="h-12 mb-6">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={roleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-2xl md:text-3xl font-semibold text-gray-300"
                            >
                                {roles[roleIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
                        I am a skilled Web Developer, UI/UX Designer, and passionate ML Explorer dedicated to crafting seamless and intelligent digital experiences.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://drive.google.com/file/d/1XJib25ZX82Vr5Ngu0_MEz44-LzQcqvNt/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <Download size={20} />
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-purple-600 blur-2xl opacity-40"></div>
                        <img
                            src={bg}
                            alt="Asma Malica"
                            className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/10 glass shadow-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Intro;
