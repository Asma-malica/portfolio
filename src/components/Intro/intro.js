import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Calendar, ArrowRight, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-scroll';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../Common/BrandIcons';
import asmaImg from '../../assets/asma-new.jpg';

const Intro = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = [
        'SAP ABAP Analyst',
        'S/4HANA & RAP Developer',
        'CDS Views & OData Specialist',
        'Full Stack & Web Developer'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3200);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section id="intro" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-10 pb-16">
            {/* Ambient Cyan/Blue Glows matching Logo */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#00a6f4]/20 rounded-full mix-blend-screen filter blur-[90px] opacity-60 animate-blob pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#0284c7]/20 rounded-full mix-blend-screen filter blur-[90px] opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-[#38bdf8]/15 rounded-full mix-blend-screen filter blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">

                {/* Left: Text Content & Current Status */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center lg:text-left"
                >
                    {/* Live Current Status Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00a6f4]/10 border border-[#00a6f4]/30 text-cyan-300 text-xs font-semibold mb-6 shadow-[0_0_12px_rgba(0,166,244,0.2)]">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00a6f4]"></span>
                        </span>
                        <span>Current Status: SAP ABAP Analyst at KaarTech</span>
                    </div>

                    <h2 className="text-lg md:text-xl font-medium text-slate-400 mb-2">Hello, I'm</h2>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
                        Asma <span className="text-gradient">Malica J</span>
                    </h1>

                    {/* Rotating Animated Roles */}
                    <div className="h-12 mb-4 flex items-center justify-center lg:justify-start">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={roleIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-[#38bdf8]"
                            >
                                <Sparkles className="w-6 h-6 text-[#00a6f4]" />
                                <span>{roles[roleIndex]}</span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Professional Bio */}
                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                        Enterprise <span className="text-white font-semibold">SAP ABAP Analyst</span> with proven experience in <span className="text-[#38bdf8]">WRICEF, CDS Views, OData Services, and RAP</span> on SAP S/4HANA. Actively engineering business solutions for the Royal Commission for Makkah City and Holy Sites (RCMC) at KaarTech, complemented by full-stack development expertise.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                        {/* Download Resume */}
                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="https://drive.google.com/file/d/1XJib25ZX82Vr5Ngu0_MEz44-LzQcqvNt/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00a6f4] via-[#0284c7] to-[#0369a1] text-white px-7 py-3.5 rounded-full font-semibold hover:from-[#38bdf8] hover:to-[#00a6f4] transition-all shadow-[0_0_20px_rgba(0,166,244,0.35)]"
                        >
                            <Download size={18} />
                            <span>Download Resume</span>
                        </motion.a>

                        {/* Topmate CTA */}
                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="https://topmate.io/asma_malica_j/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#081226] border border-[#00a6f4]/40 text-[#38bdf8] hover:text-white hover:bg-[#00a6f4]/20 hover:border-[#00a6f4] px-6 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(0,166,244,0.15)]"
                        >
                            <Calendar size={18} className="text-[#00a6f4]" />
                            <span>Book 1:1 on Topmate</span>
                        </motion.a>

                        {/* Contact Me */}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="inline-flex items-center gap-2 text-slate-300 hover:text-white px-5 py-3.5 rounded-full hover:bg-white/5 cursor-pointer font-medium transition-colors"
                        >
                            <span>Contact Me</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Social Quick Links */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-400">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-2">Connect:</span>
                        
                        <a
                            href="https://github.com/Asma-malica"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                            aria-label="GitHub Profile"
                        >
                            <GithubIcon size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/Asma-malica/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                            aria-label="LinkedIn Profile"
                        >
                            <LinkedinIcon size={18} />
                        </a>

                        <a
                            href="https://leetcode.com/u/Asma-malica/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                            aria-label="LeetCode Profile"
                        >
                            <LeetCodeIcon size={18} />
                        </a>

                        <a
                            href="https://topmate.io/asma_malica_j/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/20 flex items-center justify-center text-[#38bdf8] hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                            aria-label="Topmate Mentorship"
                        >
                            <Calendar size={18} />
                        </a>

                        <a
                            href="mailto:asmamalica07@gmail.com"
                            className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                            aria-label="Send Direct Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Right: New Photo with Cyan Aura Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center lg:justify-end"
                >
                    <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96">
                        {/* Cyan Glowing Orbs behind the photo matching the logo */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00a6f4] via-[#0284c7] to-[#38bdf8] blur-2xl opacity-40 animate-pulse-subtle"></div>
                        
                        {/* Subtle rotating circular decorative ring */}
                        <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#00a6f4]/40 animate-[spin_30s_linear_infinite]"></div>

                        {/* Photo container */}
                        <div className="relative z-10 w-full h-full rounded-full p-2 bg-[#081226]/80 backdrop-blur-md border-2 border-[#00a6f4]/50 shadow-[0_0_35px_rgba(0,166,244,0.25)] overflow-hidden">
                            <img
                                src={asmaImg}
                                alt="Asma Malica J - SAP ABAP Analyst"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* Floating Status Badge */}
                        <div className="absolute -bottom-2 -left-4 sm:left-2 z-20 glass px-4 py-2 rounded-xl flex items-center gap-2 border border-[#00a6f4]/30 shadow-lg">
                            <ShieldCheck className="w-5 h-5 text-cyan-400" />
                            <div className="text-left">
                                <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">KaarTech Analyst</p>
                                <p className="text-xs text-white font-bold">RCMC Project</p>
                            </div>
                        </div>

                        {/* Floating Tech Badge */}
                        <div className="absolute -top-2 -right-4 sm:right-2 z-20 glass px-4 py-2 rounded-xl flex items-center gap-2 border border-[#00a6f4]/30 shadow-lg">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#00a6f4] animate-ping"></div>
                            <div className="text-left">
                                <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Specialization</p>
                                <p className="text-xs text-white font-bold">SAP S/4HANA & RAP</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Intro;