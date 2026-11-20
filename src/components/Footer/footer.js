import React from "react";
import { Link } from "react-scroll";
import { ArrowUp, Calendar, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "../Common/BrandIcons";
import logoImg from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-[#00a6f4]/20 bg-[#020612] pt-14 pb-8 relative z-10 overflow-hidden">
            {/* Ambient cyan reflection */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#00a6f4]/10 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* Logo and Tagline */}
                <div className="mb-10 text-center max-w-xl">
                    <Link to="intro" smooth={true} duration={800} className="cursor-pointer inline-flex items-center gap-3 mb-4 group">
                        <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#00a6f4] to-[#0284c7] shadow-[0_0_15px_rgba(0,166,244,0.3)] group-hover:scale-105 transition-transform">
                            <img
                                src={logoImg}
                                alt="Asma Malica Logo"
                                className="w-full h-full object-cover rounded-full bg-black"
                            />
                        </div>
                        <div className="text-left">
                            <span className="text-2xl font-bold tracking-tight text-white block">
                                ASMA <span className="text-gradient-cyan">MALICA</span>
                            </span>
                            <span className="text-[11px] text-cyan-400 font-semibold uppercase tracking-widest block">
                                SAP ABAP Analyst @ KaarTech
                            </span>
                        </div>
                    </Link>

                    <p className="text-slate-400 text-sm italic leading-relaxed mt-2">
                        "Architecting scalable SAP enterprise solutions and delivering resilient digital software with passion and continuous learning."
                    </p>
                </div>

                {/* Social & Networking Profiles */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    <a
                        href="https://github.com/Asma-malica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                        aria-label="GitHub"
                    >
                        <GithubIcon size={18} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/Asma-malica/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon size={18} />
                    </a>

                    <a
                        href="https://leetcode.com/u/Asma-malica/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                        aria-label="LeetCode"
                    >
                        <LeetCodeIcon size={18} />
                    </a>

                    <a
                        href="https://topmate.io/asma_malica_j/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/25 flex items-center justify-center text-[#38bdf8] hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                        aria-label="Topmate Mentorship"
                    >
                        <Calendar size={18} />
                    </a>

                    <a
                        href="mailto:asmamalica07@gmail.com"
                        className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.3)] transition-all"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </a>
                </div>

                {/* Bottom Bar */}
                <div className="w-full border-t border-[#00a6f4]/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p className="flex items-center gap-1.5">
                        &copy; {new Date().getFullYear()} Asma Malica J. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://portfolio-asmamalica.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-300 transition-colors"
                        >
                            portfolio-asmamalica.vercel.app
                        </a>

                        <Link
                            to="intro"
                            smooth={true}
                            duration={800}
                            className="w-10 h-10 rounded-full bg-[#081226] border border-[#00a6f4]/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#00a6f4] hover:shadow-[0_0_12px_rgba(0,166,244,0.35)] cursor-pointer transition-all hover:-translate-y-1"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={18} className="text-cyan-400" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;