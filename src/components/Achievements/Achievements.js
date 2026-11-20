import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, CheckCircle, Shield } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;
        let hasStarted = false;

        const updateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0] && entries[0].isIntersecting && !hasStarted) {
                hasStarted = true;
                animationFrame = requestAnimationFrame(updateCount);
            }
        });

        const el = document.getElementById(`counter-${end}`);
        if (el) observer.observe(el);

        return () => {
            cancelAnimationFrame(animationFrame);
            if (el) observer.unobserve(el);
        };
    }, [end, duration]);

    return (
        <span id={`counter-${end}`} className="text-4xl md:text-5xl font-extrabold text-white">
            {count}{suffix}
        </span>
    );
};

const Achievements = () => {
    const stats = [
        { 
            icon: <Trophy className="w-8 h-8 text-[#00a6f4]" />, 
            count: 10, 
            suffix: "+", 
            label: "Enterprise & Web Projects",
            desc: "SAP WRICEF, CDS, RAP, and Full Stack builds"
        },
        { 
            icon: <Award className="w-8 h-8 text-[#38bdf8]" />, 
            count: 95, 
            suffix: "%", 
            label: "Academic Peak Score",
            desc: "Higher Secondary Top Tier Score" 
        },
        { 
            icon: <Star className="w-8 h-8 text-cyan-300" />, 
            count: 8, 
            suffix: ".71", 
            label: "Kongu Engg CGPA",
            desc: "B.E. Computer Science & Engineering"
        }
    ];

    const certificates = [
        { 
            title: "Kavach National Hackathon", 
            issuer: "Ministry of Education & Govt of India", 
            date: "2023",
            detail: "Built ML-powered Spam Alert System with Python & Streamlit."
        },
        { 
            title: "SAP ABAP & S/4HANA Enterprise Specialization", 
            issuer: "Kaar Technologies", 
            date: "2025",
            detail: "Advanced WRICEF, CDS Views, OData Services, and RAP Architecture."
        },
        { 
            title: "Full Stack Software Engineering", 
            issuer: "Calibraint Technologies", 
            date: "2024",
            detail: "Node.js, Express, MongoDB, RESTful APIs, and responsive architectures."
        }
    ];

    return (
        <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2 block">
                        Milestones & Recognition
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gradient">
                        Achievements & Honors
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
                        Notable academic distinctions, enterprise accomplishments, and technical hackathons.
                    </p>
                </motion.div>

                {/* Animated Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 hover:border-[#00a6f4]/50 transition-all duration-300"
                        >
                            <div className="mb-5 p-4 bg-[#040919] rounded-2xl border border-[#00a6f4]/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,166,244,0.3)] transition-all">
                                {stat.icon}
                            </div>
                            <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                            <p className="text-white mt-2 font-bold text-lg">{stat.label}</p>
                            <p className="text-slate-400 text-xs mt-1">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Honors & Certifications Containers */}
                <div className="grid md:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className="glass-card p-7 hover:border-[#00a6f4]/50 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
                        >
                            <div className="absolute top-0 right-0 w-28 h-28 bg-[#00a6f4]/10 rounded-bl-full pointer-events-none group-hover:bg-[#00a6f4]/20 transition-colors"></div>
                            
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2.5 rounded-xl bg-[#040919] border border-[#00a6f4]/30 text-[#00a6f4]">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-semibold bg-[#00a6f4]/15 text-cyan-300 border border-[#00a6f4]/30 px-3 py-1 rounded-full">
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-xs font-medium text-cyan-400 mb-3">{cert.issuer}</p>
                                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                    {cert.detail}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-[#00a6f4]/15 flex items-center gap-2 text-xs text-slate-400">
                                <CheckCircle className="w-3.5 h-3.5 text-[#00a6f4]" />
                                <span>Verified Credential</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;