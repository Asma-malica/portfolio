import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

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

            // Easing function for smooth deceleration
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
            if (entries[0].isIntersecting && !hasStarted) {
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
        <span id={`counter-${end}`} className="text-4xl md:text-5xl font-bold text-white">
            {count}{suffix}
        </span>
    );
};

const Achievements = () => {
    const stats = [
        { icon: <Trophy className="w-8 h-8 text-yellow-400" />, count: 15, suffix: "+", label: "Projects Completed" },
        { icon: <Award className="w-8 h-8 text-purple-400" />, count: 90, suffix: "%", label: "Academic Average" },
        { icon: <Star className="w-8 h-8 text-accent" />, count: 5, suffix: "+", label: "Certifications" }
    ];

    const certificates = [
        { title: "Kavach Hackathon", issuer: "Govt of India", date: "2023" },
        { title: "SAP Certified Associate", issuer: "SAP", date: "2024" },
        { title: "React Development", issuer: "Coursera", date: "2023" }
    ];

    return (
        <section id="achievements" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Achievements</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Milestones and recognitions throughout my journey.
                    </p>
                </motion.div>

                {/* Animated Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform"
                        >
                            <div className="mb-4 p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                            <AnimatedCounter end={stat.count} suffix={stat.suffix} />
                            <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Certificates */}
                <div className="grid md:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-bl-full pointer-events-none"></div>
                            <Award className="w-6 h-6 text-accent mb-4" />
                            <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm text-gray-400">{cert.issuer}</span>
                                <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
