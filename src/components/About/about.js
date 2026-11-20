import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Code2, Sparkles, MapPin, Globe, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
    const strengths = [
        {
            icon: <Layers className="w-7 h-7 text-[#00a6f4]" />,
            title: "SAP ABAP & S/4HANA",
            desc: "Architecting WRICEF, CDS Views, RAP models, and OData services for mission-critical enterprise systems."
        },
        {
            icon: <Code2 className="w-7 h-7 text-[#38bdf8]" />,
            title: "Full Stack Development",
            desc: "Engineered responsive full-stack apps using Node.js, Express, MongoDB, EJS, and React."
        },
        {
            icon: <Database className="w-7 h-7 text-[#0284c7]" />,
            title: "Enterprise Processes (MM & FI)",
            desc: "Customizing procurement and finance workflows, Open Items, AP Settlement, and PO reports."
        },
        {
            icon: <Sparkles className="w-7 h-7 text-cyan-300" />,
            title: "UI/UX & Modern Fiori",
            desc: "Creating intuitive SAP Fiori interfaces, UI5 apps, and high-fidelity prototypes in Figma."
        }
    ];

    const quickFacts = [
        { icon: <Briefcase className="w-4 h-4 text-[#00a6f4]" />, label: "Current Role", val: "SAP ABAP Analyst @ KaarTech" },
        { icon: <GraduationCap className="w-4 h-4 text-[#38bdf8]" />, label: "Education", val: "B.E. CSE, Kongu Engg College (CGPA 8.71)" },
        { icon: <MapPin className="w-4 h-4 text-[#00a6f4]" />, label: "Location", val: "Erode, Tamil Nadu, India" },
        { icon: <Globe className="w-4 h-4 text-[#38bdf8]" />, label: "Languages", val: "English, Tamil, Arabic (R, W, S)" },
    ];

    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2 block">
                        Professional Background
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gradient">About Me</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                        Bridging enterprise ERP intelligence with modern full-stack engineering and user-first digital experiences.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Bio & Journey Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 glass-card p-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#00a6f4]/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                            <span>My Professional Journey</span>
                            <span className="h-1 w-12 bg-gradient-to-r from-[#00a6f4] to-transparent rounded-full inline-block"></span>
                        </h3>
                        
                        <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                            I am an <strong className="text-white">SAP ABAP Analyst</strong> at <strong className="text-[#38bdf8]">KaarTech</strong>, actively delivering enterprise solutions for the prestigious <strong className="text-white">Royal Commission for Makkah City and Holy Sites (RCMC)</strong> project. My focus centers on building resilient <strong className="text-[#38bdf8]">WRICEF</strong> objects, advanced <strong className="text-[#38bdf8]">CDS Views</strong>, <strong className="text-[#38bdf8]">OData Services</strong>, and <strong className="text-[#38bdf8]">RAP (RESTful Application Programming)</strong> models on SAP S/4HANA.
                        </p>

                        <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                            Prior to KaarTech, I gained robust hands-on full-stack development experience as a Developer at <strong className="text-white">Calibraint Technologies</strong>, where I developed end-to-end architectures including an enterprise Movie Booking System with Node.js, Express, EJS, and MongoDB.
                        </p>

                        <p className="text-slate-300 leading-relaxed mb-8 text-sm sm:text-base">
                            With a strong academic foundation from <strong className="text-white">Kongu Engineering College (CGPA: 8.71)</strong>, I blend analytical rigour, problem-solving, and clean architectural design into everything I create.
                        </p>

                        {/* Quick Facts Grid */}
                        <div className="grid sm:grid-cols-2 gap-3 pt-6 border-t border-[#00a6f4]/20">
                            {quickFacts.map((fact, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-[#040919]/70 border border-[#00a6f4]/15">
                                    <div className="p-2 rounded-lg bg-[#00a6f4]/10 border border-[#00a6f4]/20 shrink-0">
                                        {fact.icon}
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[11px] text-slate-400 font-medium">{fact.label}</p>
                                        <p className="text-xs text-white font-semibold truncate">{fact.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Pillars & Strengths Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 grid gap-4"
                    >
                        {strengths.map((item, index) => (
                            <div
                                key={index}
                                className="glass-card p-5 flex items-start gap-4 hover:border-[#00a6f4]/50 hover:bg-[#081226]/80 transition-all duration-300 group"
                            >
                                <div className="p-3 bg-[#040919] rounded-xl border border-[#00a6f4]/25 group-hover:scale-105 group-hover:border-[#00a6f4] transition-all shrink-0 shadow-[0_0_12px_rgba(0,166,244,0.15)]">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-base font-semibold text-white mb-1 group-hover:text-[#38bdf8] transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;